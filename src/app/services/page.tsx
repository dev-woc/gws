import { AlertCircle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Our Services",
	description:
		"Expert credit repair and personalized financial coaching from Gordon Wealth Strategies. CROA-compliant, transparent, results-focused.",
};

export default function ServicesPage() {
	return (
		<>
			<section className="bg-dark text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
						Our Services
					</h1>
					<p className="text-white/70 text-lg max-w-xl mx-auto">
						Two powerful pillars designed to transform your financial life — from damaged credit to
						lasting wealth.
					</p>
				</div>
			</section>

			{/* Credit Repair */}
			<section id="credit-repair" className="py-20 bg-offwhite scroll-mt-16">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
						<div>
							<div className="w-12 h-0.5 bg-gold mb-6" />
							<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy mb-4">
								Credit Repair
							</h2>
							<p className="text-charcoal/70 leading-relaxed mb-8">
								We perform a comprehensive review of your credit profile across all three major
								bureaus, then take strategic action to dispute inaccurate, unverifiable, or obsolete
								negative items — professionally and compliantly.
							</p>
							<ul className="space-y-4 mb-8">
								{[
									"Full review and analysis of Equifax, Experian & TransUnion reports",
									"Identification of inaccurate, unverifiable, or obsolete items",
									"Professional dispute letters prepared and submitted on your behalf",
									"Monthly status updates on dispute progress",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle className="size-5 text-gold shrink-0 mt-0.5" />
										<span className="text-charcoal text-sm leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
							<div className="bg-white rounded-xl border border-border p-5">
								<p className="text-sm text-charcoal/80">
									<strong className="text-navy">Timeline:</strong> Typical engagement 6–12 months.{" "}
									<strong className="text-navy">Pricing:</strong> Setup fee + starting at $99/month.
									No advance fees collected — CROA compliant.
								</p>
							</div>
						</div>

						<div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
							<div className="flex items-start gap-3 mb-4">
								<AlertCircle className="size-5 text-gold shrink-0 mt-0.5" />
								<h3 className="font-semibold text-navy">Important Consumer Disclosure</h3>
							</div>
							<div className="space-y-4 text-sm text-charcoal/70 leading-relaxed">
								<p>
									You have the right to dispute inaccurate information on your credit report
									directly with the credit bureaus at no cost. The bureaus are required to
									investigate disputes within 30 days.
								</p>
								<p>
									Gordon Wealth Strategies does not guarantee the removal of accurate, timely, or
									verifiable information from your credit report. No credit services organization
									can legally make such a guarantee.
								</p>
								<p>
									We do not collect any fees before we have performed the services we have
									contracted to perform, in compliance with the Credit Repair Organizations Act
									(CROA).
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Financial Coaching */}
			<section id="financial-coaching" className="py-20 bg-white scroll-mt-16">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="w-12 h-0.5 bg-gold mb-6" />
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy mb-4">
						Financial Coaching
					</h2>
					<p className="text-charcoal/70 leading-relaxed mb-10 max-w-2xl">
						Beyond credit repair, we build the financial foundation that keeps you on track for the
						long term. Our personalized coaching sessions deliver a clear roadmap — from budget to
						wealth.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
						{[
							{
								title: "Budget Development",
								description:
									"Personalized budget and cash flow plan designed around your actual income and expenses.",
							},
							{
								title: "Debt Elimination Strategy",
								description:
									"A step-by-step plan to systematically eliminate debt with accountability check-ins.",
							},
							{
								title: "Savings & Wealth Roadmap",
								description:
									"A forward-looking strategy for building savings, emergency funds, and long-term wealth.",
							},
							{
								title: "Bi-Weekly Coaching Sessions",
								description:
									"Regular sessions to review progress, adjust the plan, and keep your momentum strong.",
							},
						].map(({ title, description }) => (
							<div
								key={title}
								className="flex gap-4 p-5 rounded-xl bg-offwhite border border-border"
							>
								<CheckCircle className="size-5 text-gold shrink-0 mt-0.5" />
								<div>
									<h3 className="font-semibold text-navy text-sm mb-1">{title}</h3>
									<p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
								</div>
							</div>
						))}
					</div>
					<div className="bg-offwhite rounded-xl border border-border p-5 max-w-md">
						<p className="text-sm text-charcoal/80">
							<strong className="text-navy">Pricing:</strong> Monthly retainer or packaged 3-month
							program starting at $200/month.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-navy text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
						Ready to Transform Your Finances?
					</h2>
					<p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
						Start with a free consultation. We&apos;ll review your situation and recommend the right
						path forward.
					</p>
					<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
						<Link href="/contact">Book Your Free Consultation</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
