/** @format */
import PageWrapper from "./components/PageWrapper";
import LandingHero from "./components/LandingHero";
export default function Home() {
	return (
		<PageWrapper homePage={true}>
			<LandingHero />
		</PageWrapper>
	);
}
