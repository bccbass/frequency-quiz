/** @format */

"use client";
import React, { useState, lazy, Suspense } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
const OscillatorButton = lazy(() => import("../OscillatorButton"));
// import OscillatorButton from "../OscillatorButton";
import InitialPlayButton from "../InitialPlayButton";

const frequencies = [
	100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 8000,
	12000,
];

const FrequencyPractice = ({}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [userInteraction, setUserInteraction] = useState(false);
	const [frequency, setFrequency] = useState(frequencies[0]); // Default frequency
	const handleFrequencyChange = (value) => {
		setFrequency(value);
	};

	return (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2"
		>
			<div className="h-fit overflow-scroll">
				<FrequencyDisplay
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleFrequencyChange}
					activeFrequency={frequency}
					frequencies={frequencies}
				/>
			</div>
			{userInteraction ? (
				<Suspense fallback={<div>Loading...</div>}>
					<OscillatorButton
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						frequency={frequency}
					/>
				</Suspense>
			) : (
				<InitialPlayButton
					handleClick={() => {
						setIsPlaying(true);
						setUserInteraction(true);
					}}
				/>
			)}
		</div>
	);
};

export default FrequencyPractice;
