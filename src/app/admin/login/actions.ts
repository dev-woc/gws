"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData): Promise<void> {
	const password = formData.get("password") as string;
	const adminPassword = process.env.ADMIN_PASSWORD;
	const adminToken = process.env.ADMIN_TOKEN;

	if (!adminPassword || !adminToken) {
		redirect("/admin/login?error=not-configured");
	}

	if (password !== adminPassword) {
		redirect("/admin/login?error=invalid");
	}

	const cookieStore = await cookies();
	cookieStore.set("admin_token", adminToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 60 * 60 * 24 * 30,
		path: "/",
	});

	redirect("/admin/leads");
}
