import { NextResponse } from "next/server";

// Stub for MVP marketing site — restore for Phase 3 client portal
export function GET() {
	return NextResponse.json({ error: "Auth not configured" }, { status: 503 });
}

export function POST() {
	return NextResponse.json({ error: "Auth not configured" }, { status: 503 });
}
