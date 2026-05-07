import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-navy text-white">
			<div className="container mx-auto px-4 py-14 max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<div>
						<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3">
							Gordon Wealth Strategies
						</h3>
						<p className="text-white/70 text-sm leading-relaxed mb-4">
							Helping Florida residents repair damaged credit, eliminate financial stress, and build
							lasting wealth — one strategy at a time.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								aria-label="Follow on Instagram"
								className="text-white/60 hover:text-gold transition-colors"
							>
								<Instagram className="size-5" />
							</a>
							<a
								href="#"
								aria-label="Follow on Facebook"
								className="text-white/60 hover:text-gold transition-colors"
							>
								<Facebook className="size-5" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-5">
							Navigation
						</h4>
						<ul className="space-y-3">
							{[
								{ href: "/", label: "Home" },
								{ href: "/about", label: "About" },
								{ href: "/services", label: "Services" },
								{ href: "/how-it-works", label: "How It Works" },
								{ href: "/contact", label: "Contact" },
							].map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className="text-white/70 hover:text-white text-sm transition-colors"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-5">
							Contact
						</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="tel:8134808325"
									className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
								>
									<Phone className="size-4 shrink-0" />
									(813) 480-8325
								</a>
							</li>
							<li>
								<a
									href="mailto:jamere@gordonwealthstrategies.com"
									className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors break-all"
								>
									<Mail className="size-4 shrink-0" />
									jamere@gordonwealthstrategies.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 mt-10 pt-8">
					<p className="text-white/40 text-xs leading-relaxed mb-5 max-w-2xl">
						<strong className="text-white/60">Important Disclosure:</strong> You have the right to
						dispute inaccurate information on your credit report directly with the credit bureaus at
						no cost. Gordon Wealth Strategies does not guarantee the removal of accurate, timely, or
						verifiable information from your credit report.
					</p>
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
						<p className="text-white/40 text-xs">
							© {new Date().getFullYear()} Gordon Wealth Strategies LLC. All rights reserved.
							Florida LLC.
						</p>
						<div className="flex gap-5">
							<Link
								href="/privacy-policy"
								className="text-white/40 hover:text-white text-xs transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-white/40 hover:text-white text-xs transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
