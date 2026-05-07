import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Map, Phone, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/sections/process-timeline";

export const metadata: Metadata = {
	title: "How It Works",
	description:
		"See exactly how Gordon Wealth Strategies takes you from your current credit situation to measurable results in 5 clear steps.",
};

const steps = [
	{
		number: 1,
		icon: <Phone className="size-6" />,
		title: "Free Consultation",
		description:
			"We start with a no-obligation call to understand your credit situation, financial goals, and what's been holding you back.",
	},
	{
		number: 2,
		icon: <Search className="size-6" />,
		title: "Credit Audit",
		description:
			"We pull and analyze your full credit reports from all three bureaus to identify every negative item, error, or opportunity.",
	},
	{
		number: 3,
		icon: <Map className="size-6" />,
		title: "Strategy Development",
		description:
			"We build your personalized credit repair and wealth roadmap — clear steps, realistic timelines, and measurable goals.",
	},
	{
		number: 4,
		icon: <FileText className="size-6" />,
		title: "Execution & Disputing",
		description:
			"We prepare and submit professional dispute letters on your behalf, tracking each dispute through every bureau's process.",
	},
	{
		number: 5,
		icon: <TrendingUp className="size-6" />,
		title: "Results & Monitoring",
		description:
			"We monitor your credit progress month by month, provide regular updates, and adjust your strategy as results come in.",
	},
];

export default function HowItWorksPage() {
	return (
		<>
			<section className="bg-dark text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
						How It Works
					</h1>
					<p className="text-white/70 text-lg max-w-xl mx-auto">
						A clear, transparent process — from your first call to measurable credit improvement.
					</p>
				</div>
			</section>

			<section className="py-20 bg-offwhite">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy mb-3">
							Your 5-Step Journey
						</h2>
						<p className="text-charcoal/70 max-w-xl mx-auto">
							No surprises. No fine print. Just a clear path from where you are to where you want to
							be.
						</p>
					</div>
					<ProcessTimeline steps={steps} />
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy text-center mb-10">
						What to Expect
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								label: "Timeline",
								value: "6–12 Months",
								description:
									"Most clients see meaningful progress within the first 90 days.",
							},
							{
								label: "Communication",
								value: "Monthly Updates",
								description:
									"You receive a full status update on every active dispute each month.",
							},
							{
								label: "Compliance",
								value: "CROA Compliant",
								description:
									"Every step follows federal credit repair law. No hidden fees, no false promises.",
							},
						].map(({ label, value, description }) => (
							<div
								key={label}
								className="p-6 rounded-xl bg-offwhite border border-border text-center"
							>
								<div className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
									{label}
								</div>
								<div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-3">
									{value}
								</div>
								<p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-navy text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
						Ready to Take the First Step?
					</h2>
					<p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
						Your free consultation is the beginning of your credit transformation.
					</p>
					<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
						<Link href="/contact">Book Your Free Consultation</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
