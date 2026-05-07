import { Award, Building, Scale, Shield } from "lucide-react";

const indicators = [
	{ icon: Shield, label: "Florida Licensed LLC" },
	{ icon: Award, label: "Surety Bond Protected" },
	{ icon: Scale, label: "CROA Federal Compliant" },
	{ icon: Building, label: "EIN Registered" },
];

export function TrustIndicators() {
	return (
		<section className="bg-white border-b border-border py-6">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="flex flex-wrap justify-center gap-8 md:gap-16">
					{indicators.map(({ icon: Icon, label }) => (
						<div key={label} className="flex items-center gap-2.5 text-navy">
							<Icon className="size-5 text-gold shrink-0" />
							<span className="text-sm font-semibold tracking-wide">{label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
