import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Admin routes — skip login page itself
	if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
		const token = request.cookies.get("admin_token")?.value;
		const adminToken = process.env.ADMIN_TOKEN;

		if (!adminToken || token !== adminToken) {
			const loginUrl = new URL("/admin/login", request.url);
			return NextResponse.redirect(loginUrl);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*"],
};
