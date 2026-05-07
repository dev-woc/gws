import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Gordon Wealth Strategies terms of service — your rights and responsibilities when using our credit repair and financial coaching services.",
};

export default function TermsPage() {
	return (
		<>
			<section className="bg-dark text-white py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="w-12 h-0.5 bg-gold mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-3">
						Terms of Service
					</h1>
					<p className="text-white/60 text-sm">
						Last updated:{" "}
						{new Date().toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>
			</section>

			<section className="py-16 bg-offwhite">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm space-y-10">
						<div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-6">
							<p className="text-sm text-charcoal/80 leading-relaxed">
								<strong className="text-navy">Important CROA Notice:</strong> You have the right to
								dispute inaccurate information on your credit report directly with the credit
								bureaus at no cost. Gordon Wealth Strategies LLC does not guarantee the removal of
								accurate, timely, or verifiable information from your credit report. No credit
								services organization can legally make such a guarantee.
							</p>
						</div>

						<div className="prose prose-sm max-w-none text-charcoal/80 leading-relaxed">
							<section className="space-y-4">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									1. Acceptance of Terms
								</h2>
								<p>
									By accessing or using the website at gordonwealthstrategies.com, you agree to be
									bound by these Terms of Service. If you do not agree to these terms, please do not
									use our website or services.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									2. Services Description
								</h2>
								<p>
									Gordon Wealth Strategies LLC provides credit repair services and personal
									financial coaching. Our services include:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Review and analysis of credit bureau reports</li>
									<li>Preparation and submission of dispute letters to credit bureaus</li>
									<li>Monthly progress updates on dispute status</li>
									<li>Personalized budget development and cash flow planning</li>
									<li>Debt elimination strategy and accountability coaching</li>
								</ul>
								<p>
									The content on this website is provided for informational purposes only and does
									not constitute financial, legal, or investment advice.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									3. Credit Repair Organizations Act (CROA) Compliance
								</h2>
								<p>
									Gordon Wealth Strategies LLC operates in compliance with the federal Credit Repair
									Organizations Act (CROA). In accordance with CROA:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										We do not collect any fees before fully performing the services we have agreed
										to provide.
									</li>
									<li>
										We cannot guarantee the removal of accurate, timely, or verifiable information
										from your credit report.
									</li>
									<li>
										You have the right to cancel any contract with us within 3 business days of
										signing, without penalty.
									</li>
									<li>
										You have the right to dispute inaccurate information on your credit report
										directly with the credit bureaus for free.
									</li>
								</ul>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									4. No Guarantees
								</h2>
								<p>
									Gordon Wealth Strategies LLC makes no guarantees regarding specific credit score
									improvements or outcomes. Results vary based on individual circumstances,
									including the nature of negative items on your credit report, creditor responses,
									and your financial behavior during the engagement.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									5. Client Responsibilities
								</h2>
								<p>By engaging our services, you agree to:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Provide accurate and truthful information about your financial situation</li>
									<li>
										Not apply for new credit, incur new debt, or make late payments during active
										disputes without notifying us
									</li>
									<li>
										Cooperate with our requests for documentation necessary to complete your case
									</li>
									<li>Maintain timely payments on existing accounts during our engagement</li>
								</ul>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									6. Intellectual Property
								</h2>
								<p>
									All content on this website, including text, graphics, logos, and images, is the
									property of Gordon Wealth Strategies LLC and is protected by applicable copyright
									and trademark laws. You may not reproduce or distribute any content without our
									prior written consent.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									7. Limitation of Liability
								</h2>
								<p>
									Gordon Wealth Strategies LLC shall not be liable for any indirect, incidental, or
									consequential damages arising from your use of our website or services. Our total
									liability shall not exceed the amount you paid for the specific service giving
									rise to the claim.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									8. Governing Law
								</h2>
								<p>
									These Terms of Service are governed by the laws of the State of Florida, without
									regard to its conflict of law provisions. Any disputes shall be resolved in the
									courts of Florida.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									9. Contact for Legal Notices
								</h2>
								<ul className="list-none space-y-1">
									<li>
										<strong>Gordon Wealth Strategies LLC</strong>
									</li>
									<li>Florida, USA</li>
									<li>
										Email:{" "}
										<a
											href="mailto:jamere@gordonwealthstrategies.com"
											className="text-navy underline"
										>
											jamere@gordonwealthstrategies.com
										</a>
									</li>
									<li>
										Phone:{" "}
										<a href="tel:8134808325" className="text-navy underline">
											(813) 480-8325
										</a>
									</li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
