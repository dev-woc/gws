import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Gordon Wealth Strategies | Credit Repair & Financial Coaching",
		template: "%s | Gordon Wealth Strategies",
	},
	description:
		"Florida's trusted credit repair and financial coaching firm. Repair damaged credit, eliminate debt, and build lasting wealth — one strategy at a time.",
	openGraph: {
		siteName: "Gordon Wealth Strategies",
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${playfairDisplay.variable} ${montserrat.variable} font-[family-name:var(--font-montserrat)] antialiased bg-offwhite text-charcoal`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
