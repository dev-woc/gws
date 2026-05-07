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
