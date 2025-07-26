/** @format */

"use client";
import React, { useState } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import AudioButton from "../AudioButton";
import { audioFiles } from "../../lib/gameData";
import EngageEqButton from "../EngageEqButton";
import AudioFilesList from "../AudioFilesList";

const frequencies = [
	100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 8000,
	12000,
];

const EqPractice = ({}) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [audioURL, setAudioURL] = useState(null);
	const [isEqEngaged, setIsEqEngaged] = useState(true);

	const [isPlaying, setIsPlaying] = useState(false);
	const [frequency, setFrequency] = useState(frequencies[0]); // Default frequency
	const handleFrequencyChange = (value) => {
		setFrequency(value);
	};

	return !isGameStarted ? (
		<AudioFilesList
			audioFiles={audioFiles}
			setAudioURL={setAudioURL}
			setIsGameStarted={setIsGameStarted}
		/>
	) : (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2"
		>
			<EngageEqButton
				isEqEngaged={isEqEngaged}
				setIsEqEngaged={setIsEqEngaged}
			/>
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
				isEqEngaged={isEqEngaged}
				audioURL={audioURL}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				frequency={frequency}
			/>
			<button
				onMouseDown={() => setIsGameStarted(false)}
				className="text-neutral-200 hover:underline transition duration-300 hover:underline-offset-8 text-xl"
			>
				Exit
			</button>
		</div>
	);
};

export default EqPractice;
