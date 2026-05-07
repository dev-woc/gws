import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "About Jamere Gordon",
	description:
		"Meet Jamere Gordon, CEO & Wealth Strategist at Gordon Wealth Strategies — his story, mission, and commitment to helping Floridians achieve financial freedom.",
};

export default function AboutPage() {
	return (
		<>
			<section className="bg-dark text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
						About Jamere Gordon
					</h1>
					<p className="text-white/70 text-lg max-w-xl mx-auto">
						CEO & Wealth Strategist · Gordon Wealth Strategies LLC
					</p>
				</div>
			</section>

			<section className="py-20 bg-offwhite">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
						<div className="flex flex-col items-center md:items-start gap-8">
							<div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-xl">
								<Image
									src="/images/jamere-headshot.png"
									alt="Jamere Gordon, CEO of Gordon Wealth Strategies"
									fill
									className="object-cover object-top"
								/>
							</div>
							<blockquote className="border-l-4 border-gold pl-5 max-w-sm">
								<p className="font-[family-name:var(--font-playfair)] text-xl italic text-navy leading-relaxed">
									&ldquo;Gordon Wealth Strategies is more than a business — it is a mission.&rdquo;
								</p>
								<footer className="text-sm text-charcoal/60 mt-3 font-semibold not-italic">
									— Jamere Gordon
								</footer>
							</blockquote>
						</div>

						<div>
							<h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy mb-6">
								Why I Started Gordon Wealth Strategies
							</h2>
							<div className="space-y-5 text-charcoal/80 leading-relaxed">
								<p>
									Financial stress is one of the leading causes of anxiety in American households.
									Millions of individuals struggle with damaged credit, unmanageable debt, and a
									complete lack of financial literacy — not because they lack discipline, but because
									they have never been given the tools, knowledge, or personalized guidance to change
									their financial trajectory.
								</p>
								<p>
									Gordon Wealth Strategies LLC exists to solve this problem. We bridge the gap between
									where our clients are financially and where they deserve to be — by offering expert
									credit repair services, personalized financial coaching, and a clear, actionable
									roadmap to wealth.
								</p>
								<p>
									Our clients are not just buying a service. They are investing in relief, clarity, and
									hope around money. Every strategy we build is tailored to the individual — because
									your financial situation is unique, and your solution should be too.
								</p>
								<p>
									Based in Florida, we serve clients statewide with a commitment to compliance,
									transparency, and real results. Whether you&apos;re preparing for a mortgage,
									recovering from financial hardship, or ready to stop living paycheck to paycheck —
									we&apos;re here.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy text-center mb-10">
						Our Credentials
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								title: "Florida Licensed LLC",
								description:
									"Gordon Wealth Strategies is a registered Florida Limited Liability Company with a valid EIN, operating fully within state and federal guidelines.",
							},
							{
								title: "CROA Compliant",
								description:
									"We operate within all requirements of the Credit Repair Organizations Act — no advance fees collected before services are rendered.",
							},
							{
								title: "Surety Bond Protected",
								description:
									"Consumer-protected with a surety bond, providing an additional layer of financial accountability and protection.",
							},
						].map(({ title, description }) => (
							<div
								key={title}
								className="p-6 rounded-xl bg-offwhite border border-border text-center"
							>
								<div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
								<h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy mb-3">
									{title}
								</h3>
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
						Ready to Work with Jamere?
					</h2>
					<p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
						Book a free consultation and let&apos;s build your personalized wealth strategy together.
					</p>
					<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
						<Link href="/contact">Book Your Free Consultation</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
