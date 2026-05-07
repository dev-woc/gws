import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Gordon Wealth Strategies privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
	return (
		<>
			<section className="bg-dark text-white py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="w-12 h-0.5 bg-gold mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-3">
						Privacy Policy
					</h1>
					<p className="text-white/60 text-sm">
						Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
					</p>
				</div>
			</section>

			<section className="py-16 bg-offwhite">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm space-y-10">
						<div className="prose prose-sm max-w-none text-charcoal/80 leading-relaxed">

							<section className="space-y-4">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									1. Introduction
								</h2>
								<p>
									Gordon Wealth Strategies LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
									&ldquo;our&rdquo;) operates the website at gordonwealthstrategies.com. This Privacy
									Policy explains how we collect, use, and protect your personal information when you
									visit our website or use our services.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									2. Information We Collect
								</h2>
								<p>We collect information you provide directly to us, including:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Contact form submissions:</strong> Your name, email address, phone
										number, and message when you contact us through our website.
									</li>
									<li>
										<strong>Service inquiries:</strong> Information about the services you are
										interested in (credit repair, financial coaching, or both).
									</li>
									<li>
										<strong>Communications:</strong> Records of correspondence if you contact us by
										phone or email.
									</li>
								</ul>
								<p>
									We also automatically collect certain technical information when you visit our
									website, including IP addresses, browser type, pages visited, and time spent on
									pages, through Google Analytics.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									3. How We Use Your Information
								</h2>
								<p>We use the information we collect to:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Respond to your inquiries and provide the services you request</li>
									<li>Send you information about our credit repair and financial coaching services</li>
									<li>Schedule consultations and follow up on service agreements</li>
									<li>Analyze website traffic to improve our services and content</li>
									<li>Comply with legal obligations</li>
								</ul>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									4. Information Sharing
								</h2>
								<p>
									We do not sell, trade, or rent your personal information to third parties. We may
									share your information with:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Resend:</strong> Our email delivery service provider, used to send
										notification emails when you submit a contact form.
									</li>
									<li>
										<strong>Google Analytics:</strong> For website traffic analysis. Google Analytics
										data is anonymized and aggregated.
									</li>
									<li>
										<strong>Calendly:</strong> If you use our scheduling link to book a consultation,
										Calendly&apos;s privacy policy applies to information you provide through their
										platform.
									</li>
									<li>
										<strong>Law enforcement or legal process:</strong> When required by law or to
										protect our rights.
									</li>
								</ul>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									5. Data Security
								</h2>
								<p>
									We implement reasonable security measures to protect your personal information.
									Contact form submissions are transmitted over HTTPS (SSL/TLS encryption). However,
									no method of transmission over the internet is 100% secure, and we cannot guarantee
									absolute security.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									6. Your Rights
								</h2>
								<p>You have the right to:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Request access to the personal information we hold about you</li>
									<li>Request correction of inaccurate information</li>
									<li>Request deletion of your personal information</li>
									<li>Opt out of marketing communications at any time</li>
								</ul>
								<p>
									To exercise these rights, contact us at{" "}
									<a
										href="mailto:jamere@gordonwealthstrategies.com"
										className="text-navy underline"
									>
										jamere@gordonwealthstrategies.com
									</a>
									.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									7. Cookies
								</h2>
								<p>
									Our website uses Google Analytics cookies to analyze website traffic. You can opt
									out of Google Analytics tracking by installing the{" "}
									<a
										href="https://tools.google.com/dlpage/gaoptout"
										target="_blank"
										rel="noopener noreferrer"
										className="text-navy underline"
									>
										Google Analytics Opt-out Browser Add-on
									</a>
									.
								</p>
							</section>

							<section className="space-y-4 pt-6">
								<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
									8. Contact Us
								</h2>
								<p>
									If you have questions about this Privacy Policy, please contact us:
								</p>
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
