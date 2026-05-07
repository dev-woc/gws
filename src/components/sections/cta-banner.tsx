import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
	heading?: string;
	subtext?: string;
	ctaLabel?: string;
	ctaHref?: string;
}

export function CtaBanner({
	heading = "Ready to Start Your Credit Journey?",
	subtext = "Book a free consultation and get your personalized strategy today. No obligation, no pressure — just clarity.",
	ctaLabel = "Book Your Free Consultation",
	ctaHref = "/contact",
}: CtaBannerProps) {
	return (
		<section className="bg-navy text-white py-20">
			<div className="container mx-auto px-4 max-w-6xl text-center">
				<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
				<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
					{heading}
				</h2>
				<p className="text-white/70 text-lg max-w-xl mx-auto mb-8">{subtext}</p>
				<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
					<Link href={ctaHref}>{ctaLabel}</Link>
				</Button>
			</div>
		</section>
	);
}
