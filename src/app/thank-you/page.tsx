import { Calendar, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "You're Booked — Gordon Wealth Strategies",
	description:
		"Your free consultation with Gordon Wealth Strategies is confirmed. Here's what to expect next.",
};

export default function ThankYouPage() {
	return (
		<section className="min-h-screen bg-dark text-white flex items-center justify-center px-4 py-20">
			<div className="max-w-xl w-full text-center">
				<div className="flex justify-center mb-6">
					<div className="size-20 rounded-full bg-gold/20 flex items-center justify-center">
						<CheckCircle className="size-10 text-gold" />
					</div>
				</div>

				<div className="w-12 h-0.5 bg-gold mx-auto mb-6" />

				<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
					You&apos;re All Set!
				</h1>
				<p className="text-white/70 text-lg mb-10 leading-relaxed">
					Your free consultation is confirmed. Check your email for the calendar invite and meeting
					details.
				</p>

				<div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10 space-y-5">
					<h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
						What to Expect
					</h2>
					<ul className="space-y-4">
						{[
							{
								icon: <Calendar className="size-5 text-gold shrink-0 mt-0.5" />,
								text: "Check your inbox — you'll receive a calendar confirmation with the call details.",
							},
							{
								icon: <CheckCircle className="size-5 text-gold shrink-0 mt-0.5" />,
								text: "Come prepared with a recent copy of your credit report if you have one — it helps Jamere hit the ground running.",
							},
							{
								icon: <CheckCircle className="size-5 text-gold shrink-0 mt-0.5" />,
								text: "The call is 30 minutes, no pressure, no commitment. Just clarity on your next step.",
							},
						].map(({ icon, text }) => (
							<li
								key={text}
								className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
							>
								{icon}
								<span>{text}</span>
							</li>
						))}
					</ul>
				</div>

				<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
					<Link href="/">Back to Home</Link>
				</Button>
			</div>
		</section>
	);
}
