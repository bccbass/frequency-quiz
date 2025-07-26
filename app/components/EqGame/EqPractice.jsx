/** @format */

"use client";
import React, { useState } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import AudioButton from "../AudioButton";

const frequencies = [
	100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 8000,
	12000,
];

const EqPractice = ({}) => {
	const [isPlaying, setIsPlaying] = useState(false);
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
			<AudioButton
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				frequency={frequency}
			/>
		</div>
	);
};

export default EqPractice;
