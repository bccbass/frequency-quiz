/** @format */

"use client";
import React, { useState } from "react";
import GainDisplay from "../GainDisplay";
import AudioButton from "../AudioGainButton";
import { audioFiles } from "../../lib/gameData";
import EngageFXButton from "../EngageFXButton";
import AudioFilesList from "../AudioFilesList";
import { gainOptions } from "../../lib/gameData";
import { GiExitDoor } from "react-icons/gi";

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
			className="flex flex-col h-screen md:h-[80vh] items-center overflow-hidden py-2 w-78 md:w-md"
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

export default GainPractice;
