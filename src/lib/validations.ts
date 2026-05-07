import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters").max(100),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().optional(),
	service: z.enum(["credit-repair", "financial-coaching", "both"]),
	message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
