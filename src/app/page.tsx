import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TrustIndicators } from "@/components/sections/trust-indicators";

export default function Home() {
	return (
		<>
			<Hero />
			<TrustIndicators />
			<ServicesOverview />
			<PainPoints />
			<CtaBanner />
		</>
	);
}
