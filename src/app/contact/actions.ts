"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";
import { createRateLimiter } from "@/lib/rate-limit";
import { consultationFormSchema, contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactRateLimiter = createRateLimiter(5, 60_000);

type ActionResult =
	| { success: true }
	| { success: false; errors?: Record<string, string[]>; message?: string };

function serviceLabel(service: string) {
	if (service === "credit-repair") return "Credit Repair";
	if (service === "financial-coaching") return "Financial Coaching";
	return "Credit Repair & Financial Coaching";
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
	const headersList = await headers();
	const ip = headersList.get("x-forwarded-for") ?? "unknown";
	const { success: allowed } = contactRateLimiter.check(ip);

	if (!allowed) {
		return {
			success: false,
			message: "Too many requests. Please wait a minute before trying again.",
		};
	}

	const raw = {
		name: formData.get("name"),
		email: formData.get("email"),
		phone: formData.get("phone") || undefined,
		service: formData.get("service"),
		message: formData.get("message"),
	};

	const result = contactFormSchema.safeParse(raw);
	if (!result.success) {
		return { success: false, errors: result.error.flatten().fieldErrors };
	}

	const { name, email, phone, service, message } = result.data;
	const label = serviceLabel(service);

	try {
		await db
			.insert(contactSubmissions)
			.values({ name, email, phone, service, message, source: "inquiry" });
	} catch {
		// DB failure shouldn't block the user — email still sends
	}

	try {
		await resend.emails.send({
			from: "GWS Website <noreply@gordonwealthstrategies.com>",
			to: process.env.CONTACT_EMAIL ?? "jamere@gordonwealthstrategies.com",
			subject: `New Inquiry: ${label} — ${name}`,
			html: `
				<h2 style="color:#1B3A6B;">New Website Inquiry</h2>
				<table style="border-collapse:collapse;width:100%;max-width:500px;">
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Name:</td><td style="padding:8px;">${name}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Email:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Phone:</td><td style="padding:8px;">${phone ?? "Not provided"}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Service:</td><td style="padding:8px;">${label}</td></tr>
				</table>
				<h3 style="color:#1B3A6B;">Message:</h3>
				<p style="background:#f5f5f0;padding:16px;border-radius:8px;line-height:1.6;">${message}</p>
			`,
		});
	} catch {
		return {
			success: false,
			message: "Failed to send message. Please try again or call us directly at (813) 480-8325.",
		};
	}

	return { success: true };
}

export async function submitConsultationForm(formData: FormData): Promise<ActionResult> {
	const headersList = await headers();
	const ip = headersList.get("x-forwarded-for") ?? "unknown";
	const { success: allowed } = contactRateLimiter.check(ip);

	if (!allowed) {
		return {
			success: false,
			message: "Too many requests. Please wait a minute before trying again.",
		};
	}

	const raw = {
		name: formData.get("name"),
		email: formData.get("email"),
		phone: formData.get("phone") || undefined,
		service: formData.get("service") || undefined,
	};

	const result = consultationFormSchema.safeParse(raw);
	if (!result.success) {
		return { success: false, errors: result.error.flatten().fieldErrors };
	}

	const { name, email, phone, service } = result.data;
	const label = service ? serviceLabel(service) : "Not specified";

	try {
		await db.insert(contactSubmissions).values({
			name,
			email,
			phone,
			service: service ?? "not-specified",
			source: "consultation",
		});
	} catch {
		// DB failure shouldn't block the redirect
	}

	try {
		await resend.emails.send({
			from: "GWS Website <noreply@gordonwealthstrategies.com>",
			to: process.env.CONTACT_EMAIL ?? "jamere@gordonwealthstrategies.com",
			subject: `New Consultation Booking: ${name}`,
			html: `
				<h2 style="color:#1B3A6B;">New Consultation Booking</h2>
				<p style="color:#C9A84C;font-weight:bold;">This person booked a free consultation call.</p>
				<table style="border-collapse:collapse;width:100%;max-width:500px;">
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Name:</td><td style="padding:8px;">${name}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Email:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Phone:</td><td style="padding:8px;">${phone ?? "Not provided"}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Service Interest:</td><td style="padding:8px;">${label}</td></tr>
				</table>
			`,
		});
	} catch {
		// Email failure shouldn't block the redirect
	}

	return { success: true };
}
