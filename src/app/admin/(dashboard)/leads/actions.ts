"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";

export async function updateLeadStatus(id: string, status: string) {
	await db
		.update(contactSubmissions)
		.set({ status, updatedAt: new Date() })
		.where(eq(contactSubmissions.id, id));
	revalidatePath("/admin/leads");
}

export async function updateLeadNotes(id: string, notes: string) {
	await db
		.update(contactSubmissions)
		.set({ notes, updatedAt: new Date() })
		.where(eq(contactSubmissions.id, id));
	revalidatePath("/admin/leads");
}

export async function createLeadManually(
	formData: FormData,
): Promise<{ success: boolean; error?: string }> {
	const name = (formData.get("name") as string)?.trim();
	const email = (formData.get("email") as string)?.trim();
	const phone = (formData.get("phone") as string)?.trim() || undefined;
	const service = (formData.get("service") as string) || "not-specified";
	const source = (formData.get("source") as string) || "inquiry";
	const notes = (formData.get("notes") as string)?.trim() || undefined;

	if (!name || name.length < 2) return { success: false, error: "Name is required." };
	if (!email || !email.includes("@")) return { success: false, error: "Valid email is required." };

	await db.insert(contactSubmissions).values({ name, email, phone, service, source, notes });
	revalidatePath("/admin/leads");
	return { success: true };
}
