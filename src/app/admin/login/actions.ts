"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
	const password = formData.get("password") as string;
	const adminPassword = process.env.ADMIN_PASSWORD;
	const adminToken = process.env.ADMIN_TOKEN;

	if (!adminPassword || !adminToken) {
		return { error: "Admin not configured. Set ADMIN_PASSWORD and ADMIN_TOKEN env vars." };
	}

	if (password !== adminPassword) {
		return { error: "Incorrect password." };
	}

	const cookieStore = await cookies();
	cookieStore.set("admin_token", adminToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 60 * 60 * 24 * 30, // 30 days
		path: "/",
	});

	redirect("/admin/leads");
}
