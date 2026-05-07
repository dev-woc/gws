import { Calendar, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ConsultationForm } from "@/components/contact/consultation-form";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Book a free consultation with Gordon Wealth Strategies. Call, email, or use our contact form — we're ready to help you start your credit repair journey.",
};

export default function ContactPage() {
	const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";

	return (
		<>
			<section className="bg-dark text-white py-20">
				<div className="container mx-auto px-4 max-w-6xl text-center">
					<div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
					<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
						Let&apos;s Talk
					</h1>
					<p className="text-white/70 text-lg max-w-xl mx-auto">
						Book your free consultation or send us a message. No pressure, no commitment — just
						clarity about your next step.
					</p>
				</div>
			</section>

			<section className="py-20 bg-offwhite">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						<div className="lg:col-span-3 bg-white rounded-2xl border border-border p-8 shadow-sm">
							<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-2">
								Send Us a Message
							</h2>
							<p className="text-charcoal/60 text-sm mb-8">
								We respond to all inquiries within 24 hours on business days.
							</p>
							<ContactForm />
						</div>

						<div className="lg:col-span-2 flex flex-col gap-6">
							<div className="bg-navy text-white rounded-2xl p-7">
								<Calendar className="size-8 text-gold mb-4" />
								<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
									Book a Free Consultation
								</h3>
								<p className="text-white/70 text-sm leading-relaxed mb-6">
									Ready to talk? Enter your info and we'll open the scheduler so you can pick a time
									that works for you.
								</p>
								<ConsultationForm calendlyUrl={calendlyUrl} />
							</div>

							<div className="bg-white rounded-2xl border border-border p-7">
								<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy mb-5">
									Direct Contact
								</h3>
								<ul className="space-y-4">
									<li>
										<a
											href="tel:8134808325"
											className="flex items-center gap-3 text-charcoal hover:text-navy transition-colors group"
										>
											<div className="size-9 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
												<Phone className="size-4 text-navy" />
											</div>
											<div>
												<div className="text-xs text-charcoal/50 font-medium">Phone</div>
												<div className="text-sm font-semibold">(813) 480-8325</div>
											</div>
										</a>
									</li>
									<li>
										<a
											href="mailto:jamere@gordonwealthstrategies.com"
											className="flex items-center gap-3 text-charcoal hover:text-navy transition-colors group"
										>
											<div className="size-9 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
												<Mail className="size-4 text-navy" />
											</div>
											<div>
												<div className="text-xs text-charcoal/50 font-medium">Email</div>
												<div className="text-sm font-semibold break-all">
													jamere@gordonwealthstrategies.com
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
