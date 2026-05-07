import { cn } from "@/lib/utils";

interface Step {
	number: number;
	icon: React.ReactNode;
	title: string;
	description: string;
}

interface ProcessTimelineProps {
	steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
	return (
		<div className="relative">
			<div className="flex flex-col md:flex-row gap-0 md:gap-4">
				{steps.map((step, index) => (
					<div
						key={step.number}
						className={cn(
							"relative flex md:flex-col gap-4 md:gap-0 md:flex-1 md:items-center md:text-center",
						)}
					>
						{/* Vertical connector (mobile) */}
						{index < steps.length - 1 && (
							<div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gold/30 md:hidden" />
						)}

						<div className="relative z-10 flex-shrink-0 md:mb-5">
							<div className="size-14 rounded-full bg-navy flex items-center justify-center border-4 border-gold shadow-md">
								<div className="text-white">{step.icon}</div>
							</div>
						</div>

						{/* Horizontal connector (desktop) */}
						{index < steps.length - 1 && (
							<div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-gold/30 z-0" />
						)}

						<div className="pb-10 md:pb-0 md:px-3">
							<div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
								Step {step.number}
							</div>
							<h3 className="font-[family-name:var(--font-playfair)] font-bold text-navy text-lg mb-2">
								{step.title}
							</h3>
							<p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
