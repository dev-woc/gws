import type { Metadata } from "next";
import { adminLogin } from "./actions";

export const metadata: Metadata = { title: "Admin Login" };

export default function AdminLoginPage({
	searchParams,
}: {
	searchParams: Promise<{ error?: string }>;
}) {
	return (
		<div className="min-h-screen bg-dark flex items-center justify-center px-4">
			<div className="w-full max-w-sm">
				<div className="mb-8 text-center">
					<div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
					<h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
						GWS Admin
					</h1>
					<p className="text-white/50 text-sm mt-1">Gordon Wealth Strategies</p>
				</div>

				<form action={adminLogin} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
					<div className="space-y-2">
						<label htmlFor="password" className="text-sm font-medium text-white/70">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							autoFocus
							className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-colors"
							placeholder="Enter admin password"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-gold hover:bg-gold/90 text-dark font-semibold rounded-lg py-2.5 transition-colors"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}
