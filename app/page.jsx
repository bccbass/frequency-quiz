/** @format */
import PageWrapper from "./components/PageWrapper";
import LandingHero from "./components/LandingHero";
import GameSection from "./components/GameSection";
export default function Home() {
	return (
		<PageWrapper>
			<LandingHero />
			<GameSection />
		</PageWrapper>
	);
}
