import Link from "next/link";
import { ArrowRight, CreditCard, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
	{
		icon: CreditCard,
		title: "Credit Repair",
		href: "/services#credit-repair",
		description:
			"We review all three credit bureau reports, identify negative items, and submit dispute letters on your behalf — with monthly progress updates.",
		bullets: [
			"All three bureaus: Equifax, Experian & TransUnion",
			"Professional dispute letters submitted for you",
			"Monthly status updates on dispute progress",
		],
	},
	{
		icon: TrendingUp,
		title: "Financial Coaching",
		href: "/services#financial-coaching",
		description:
			"Personalized budget plans, debt elimination strategies, and a clear roadmap to savings and wealth — with ongoing accountability coaching.",
		bullets: [
			"Custom budget & cash flow planning",
			"Debt elimination strategy & accountability",
			"Savings and wealth-building roadmap",
		],
	},
];

export function ServicesOverview() {
	return (
		<section className="py-20 bg-offwhite">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="text-center mb-12">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy mb-4">
						How We Help You
					</h2>
					<p className="text-charcoal/70 max-w-xl mx-auto">
						Two powerful service pillars designed to transform your financial situation — from where
						you are to where you deserve to be.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map(({ icon: Icon, title, href, description, bullets }) => (
						<Card
							key={title}
							className="bg-white border-t-4 border-t-gold shadow-sm hover:shadow-md transition-shadow"
						>
							<CardHeader className="pb-3">
								<div className="flex items-center gap-3 mb-2">
									<div className="size-10 rounded-full bg-navy/10 flex items-center justify-center">
										<Icon className="size-5 text-navy" />
									</div>
									<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy">
										{title}
									</h3>
								</div>
								<p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 mb-6">
									{bullets.map((bullet) => (
										<li key={bullet} className="flex items-start gap-2 text-sm text-charcoal">
											<span className="text-gold mt-0.5 font-bold">✓</span>
											{bullet}
										</li>
									))}
								</ul>
								<Button asChild variant="ghost" className="text-navy hover:text-navy/80 p-0 h-auto">
									<Link href={href} className="flex items-center gap-1.5 text-sm font-semibold">
										Learn More <ArrowRight className="size-4" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
