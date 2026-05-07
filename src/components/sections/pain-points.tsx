import { CheckCircle } from "lucide-react";

const painPoints = [
	{
		pain: "I don't know where to start",
		solution: "We start with a free consultation to assess your situation and map a clear path forward.",
	},
	{
		pain: "I've been denied for loans because of my credit",
		solution: "We identify and dispute the exact items causing denials — professionally and compliantly.",
	},
	{
		pain: "I'm living paycheck to paycheck and can't get ahead",
		solution: "Our coaching builds a realistic budget and debt payoff plan tailored to your income.",
	},
	{
		pain: "I want to build wealth but my credit is holding me back",
		solution:
			"Better credit opens doors — lower interest rates, better loan terms, more capital access.",
	},
];

export function PainPoints() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="text-center mb-12">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy mb-4">
						Does This Sound Familiar?
					</h2>
					<p className="text-charcoal/70 max-w-xl mx-auto">
						You don&apos;t have to figure this out alone. That&apos;s exactly why Gordon Wealth
						Strategies exists.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{painPoints.map(({ pain, solution }) => (
						<div
							key={pain}
							className="flex gap-4 p-6 rounded-xl bg-offwhite border border-border hover:border-gold/30 transition-colors"
						>
							<CheckCircle className="size-6 text-gold shrink-0 mt-0.5" />
							<div>
								<p className="font-semibold text-navy mb-1.5">&ldquo;{pain}&rdquo;</p>
								<p className="text-sm text-charcoal/70 leading-relaxed">{solution}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
