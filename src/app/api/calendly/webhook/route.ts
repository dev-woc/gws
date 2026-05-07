import { createHmac, timingSafeEqual } from "node:crypto";
import { and, eq, gt, isNull } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";

// Calendly signs each webhook: "t=<unix_ms>,v1=<hmac_hex>"
function verifySignature(rawBody: string, header: string, secret: string): boolean {
	const t = header.match(/t=(\d+)/)?.[1];
	const v1 = header.match(/v1=([a-f0-9]+)/)?.[1];
	if (!t || !v1) return false;

	const expected = createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");

	try {
		return timingSafeEqual(Buffer.from(v1, "hex"), Buffer.from(expected, "hex"));
	} catch {
		return false;
	}
}

interface CalendlyPayload {
	event: string;
	payload: {
		event: { uri: string; start_time: string };
		invitee: {
			uri: string;
			name: string;
			email: string;
			cancellation?: { canceled_by: string; reason?: string };
		};
		questions_and_answers: Array<{ question: string; answer: string }>;
	};
}

export async function POST(request: NextRequest) {
	const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
	if (!signingKey) {
		return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
	}

	const rawBody = await request.text();
	const signature = request.headers.get("Calendly-Webhook-Signature") ?? "";

	if (!verifySignature(rawBody, signature, signingKey)) {
		return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
	}

	let body: CalendlyPayload;
	try {
		body = JSON.parse(rawBody);
	} catch {
		return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
	}

	const { event, payload } = body;

	if (event === "invitee.created") {
		const { name, email, uri: calendlyUri } = payload.invitee;
		const scheduledAt = new Date(payload.event.start_time);

		// Find a pre-form lead from the same person in the last 24 hours to enrich
		const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
		const [existing] = await db
			.select({ id: contactSubmissions.id })
			.from(contactSubmissions)
			.where(
				and(
					eq(contactSubmissions.email, email),
					eq(contactSubmissions.source, "consultation"),
					isNull(contactSubmissions.calendlyUri),
					gt(contactSubmissions.createdAt, oneDayAgo),
				),
			)
			.limit(1);

		if (existing) {
			await db
				.update(contactSubmissions)
				.set({ calendlyUri, scheduledAt, updatedAt: new Date() })
				.where(eq(contactSubmissions.id, existing.id));
		} else {
			await db.insert(contactSubmissions).values({
				name,
				email,
				service: "not-specified",
				source: "consultation",
				calendlyUri,
				scheduledAt,
			});
		}
	}

	if (event === "invitee.canceled") {
		const { uri: calendlyUri, cancellation } = payload.invitee;
		const cancelNote = cancellation?.reason
			? `Cancelled (${cancellation.canceled_by}): ${cancellation.reason}`
			: `Cancelled by ${cancellation?.canceled_by ?? "unknown"}`;

		await db
			.update(contactSubmissions)
			.set({ status: "closed", notes: cancelNote, updatedAt: new Date() })
			.where(eq(contactSubmissions.calendlyUri, calendlyUri));
	}

	return NextResponse.json({ received: true });
}
