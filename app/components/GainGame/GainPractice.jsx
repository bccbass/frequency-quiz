/** @format */

"use client";
import React, { useState } from "react";
import GainDisplay from "../GainDisplay";
import AudioButton from "../AudioGainButton";
import { audioFiles } from "../../lib/gameData";
import EngageFXButton from "../EngageFXButton";
import AudioFilesList from "../AudioFilesList";
import { gainOptions } from "../../lib/gameData";

const GainPractice = ({}) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [audioURL, setAudioURL] = useState(null);
	const [isGainEngaged, setIsGainEngaged] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [gain, setGain] = useState(0); // Default gain
	const handleGainChange = (value) => {
		setGain(value);
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
				title="gain"
				isFXEngaged={isGainEngaged}
				setIsFXEngaged={setIsGainEngaged}
			/>
			<div className="h-fit overflow-scroll mt-4">
				<GainDisplay
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleGainChange}
					activeGainVal={gain}
					gainOptions={gainOptions}
				/>
			</div>
			<AudioButton
				isGainEngaged={isGainEngaged}
				audioURL={audioURL}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				gainValue={gain}
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

export default GainPractice;
