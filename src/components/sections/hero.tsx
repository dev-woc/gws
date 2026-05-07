import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="bg-dark text-white py-20 md:py-28">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1">
						<div className="w-16 h-0.5 bg-gold mb-6" />
						<h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
							Repair Your Credit.{" "}
							<span className="text-gold">Rebuild Your Life.</span>{" "}
							Build Your Wealth.
						</h1>
						<p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
							Gordon Wealth Strategies helps individuals repair damaged credit, eliminate financial
							stress, and build a clear path to lasting wealth — one strategy at a time.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold">
								<Link href="/contact">Book Your Free Consultation</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/30 text-white hover:bg-white/10 hover:text-white"
							>
								<Link href="/services">Explore Our Services</Link>
							</Button>
						</div>
					</div>

					<div className="order-1 md:order-2 flex justify-center md:justify-end">
						<div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl">
							<Image
								src="/images/jamere-headshot.png"
								alt="Jamere Gordon, CEO & Wealth Strategist at Gordon Wealth Strategies"
								fill
								className="object-cover object-top"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
