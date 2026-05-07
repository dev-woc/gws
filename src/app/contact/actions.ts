"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { createRateLimiter } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactRateLimiter = createRateLimiter(5, 60_000);

type ActionResult =
	| { success: true }
	| { success: false; errors?: Record<string, string[]>; message?: string };

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

	const serviceLabel =
		service === "credit-repair"
			? "Credit Repair"
			: service === "financial-coaching"
				? "Financial Coaching"
				: "Credit Repair & Financial Coaching";

	try {
		await resend.emails.send({
			from: "GWS Website <noreply@gordonwealthstrategies.com>",
			to: process.env.CONTACT_EMAIL ?? "jamere@gordonwealthstrategies.com",
			subject: `New Inquiry: ${serviceLabel} — ${name}`,
			html: `
				<h2 style="color:#1B3A6B;">New Contact Form Submission</h2>
				<table style="border-collapse:collapse;width:100%;max-width:500px;">
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Name:</td><td style="padding:8px;">${name}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Email:</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Phone:</td><td style="padding:8px;">${phone ?? "Not provided"}</td></tr>
					<tr><td style="padding:8px;font-weight:bold;color:#333;">Service:</td><td style="padding:8px;">${serviceLabel}</td></tr>
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
