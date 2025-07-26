/** @format */
import FreqSection from "./components/FrequencyGame/FrequenciesSection";
import EqSection from "./components/EqGame/EqSection";
import Logo from "./components/Logo";
export default function Home() {
	return (
		<div className="w-screen flex flex-col h-fit p-2">
			<Logo />
			<EqSection />
			<FreqSection />
		</div>
	);
}
