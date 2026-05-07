"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/how-it-works", label: "How It Works" },
	{ href: "/contact", label: "Contact" },
];

export function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
				<Link
					href="/"
					className="font-[family-name:var(--font-playfair)] text-navy text-xl font-bold tracking-tight"
				>
					Gordon Wealth Strategies
				</Link>

				<div className="hidden md:flex items-center gap-8">
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={cn(
								"text-sm font-medium transition-colors hover:text-navy",
								pathname === href ? "text-navy font-semibold" : "text-charcoal",
							)}
						>
							{label}
						</Link>
					))}
				</div>

				<div className="hidden md:flex">
					<Button asChild size="sm" className="bg-navy hover:bg-navy/90 text-white">
						<Link href="/contact">Book Free Consultation</Link>
					</Button>
				</div>

				<button
					className="md:hidden p-2 text-charcoal hover:text-navy transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
					type="button"
				>
					{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden bg-white border-t border-border px-4 py-6 flex flex-col gap-4">
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={cn(
								"text-sm font-medium py-2 border-b border-border last:border-0",
								pathname === href ? "text-navy font-semibold" : "text-charcoal",
							)}
							onClick={() => setIsOpen(false)}
						>
							{label}
						</Link>
					))}
					<Button asChild className="bg-navy hover:bg-navy/90 text-white w-full mt-2">
						<Link href="/contact" onClick={() => setIsOpen(false)}>
							Book Free Consultation
						</Link>
					</Button>
				</div>
			)}
		</nav>
	);
}
