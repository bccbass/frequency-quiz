/** @format */

import FreqGame from "./components/FrequenciesSection";
import Logo from "./components/Logo";
export default function Home() {
	return (
		<div className="w-screen flex flex-col h-fit p-2">
			<Logo />
			<FreqGame />
		</div>
	);
}
