import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-offwhite">
			<header className="bg-navy text-white h-14 flex items-center px-6 sticky top-0 z-40 shadow-md">
				<Link
					href="/admin/leads"
					className="font-[family-name:var(--font-playfair)] font-bold text-lg tracking-tight"
				>
					GWS Admin
				</Link>
				<nav className="ml-8 flex gap-6 text-sm text-white/70">
					<Link href="/admin/leads" className="hover:text-white transition-colors">
						Leads
					</Link>
				</nav>
				<div className="ml-auto flex items-center gap-4">
					<Link href="/" className="text-xs text-white/50 hover:text-white/80 transition-colors">
						← Back to site
					</Link>
					<form action="/api/admin/logout" method="POST">
						<button
							type="submit"
							className="text-xs text-white/50 hover:text-white/80 transition-colors"
						>
							Sign out
						</button>
					</form>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
		</div>
	);
}
