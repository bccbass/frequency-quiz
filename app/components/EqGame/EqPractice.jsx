/** @format */

"use client";
import React, { useState } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import AudioButton from "../AudioFreqButton";
import { audioFiles } from "../../lib/gameData";
import EngageFXButton from "../EngageFXButton";
import AudioFilesList from "../AudioFilesList";
import { frequencies } from "../../lib/gameData";
import { GiExitDoor } from "react-icons/gi";


const EqPractice = ({}) => {
	const defaultFreq = frequencies[0]; // Default frequency
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [audioURL, setAudioURL] = useState(null);
	const [isEqEngaged, setIsEqEngaged] = useState(true);

	const [isPlaying, setIsPlaying] = useState(false);
	const [frequency, setFrequency] = useState(defaultFreq); // Default frequency
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
			<EngageFXButton
				isFXEngaged={isEqEngaged}
				setIsFXEngaged={setIsEqEngaged}
			/>
			<div className="h-fit overflow-scroll mt-4">
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
				className="text-neutral-200 group transition duration-300 ease-in-out text-xl"
			>
				<GiExitDoor className=" text-4xl mt-12 group-hover:text-accent transition duration-300 ease-in-out" />{" "}
				<span className="text-sm uppercase group-hover:text-accent transition duration-300 ease-in-out">
					{" "}
					Exit
				</span>
			</button>
		</div>
	);
};

export default EqPractice;
