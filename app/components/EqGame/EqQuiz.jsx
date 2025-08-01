/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import AudioButton from "../AudioFreqButton";
import { GameContext } from "../../context/GameContext";
import RoundCounter from "../RoundCounter";
import { getCorrectAnswer, getOptions } from "../../lib/helperFuncs";
import { frequencies } from "../../lib/gameData";
import { audioFiles } from "../../lib/gameData";
import EngageFXButton from "../EngageFXButton";
import AudioFilesList from "../AudioFilesList";
import { GiExitDoor } from "react-icons/gi";


const EqQuiz = () => {
	const { gameState, markCorrect, incrementAttempts } = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isEqEngaged, setIsEqEngaged] = useState(true);
	const [audioURL, setAudioURL] = useState(null);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const frequency = getCorrectAnswer(frequencies);
	const freqRef = useRef(frequency);
	const frequencyGameOptions = getOptions(frequencies, freqRef.current);
	const optionsRef = useRef(frequencyGameOptions);

	const handleAnswerClick = (input, freq) => {
		if (input == freq) {
			markCorrect();
			freqRef.current = getCorrectAnswer(frequencies, freqRef.current);
			optionsRef.current = getOptions(frequencies, freqRef.current);
		} else {
			incrementAttempts();
		}
	};

	const handleIsEqEngaged = () => {
		setIsEqEngaged(!isEqEngaged);
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
			className="flex pt-10 md:pt-0 flex-col h-screen w-80 md:h-[80vh] items-center overflow-hidden md:w-md"
		>
			<div className="flex justify-between w-full items-center mt-2 mb-4">
				<EngageFXButton
					isFXEngaged={isEqEngaged}
					setIsFXEngaged={setIsEqEngaged}
				/>
				<RoundCounter round={gameState.round} />
			</div>
			<div className="h-fit overflow-scroll">
				<FrequencyDisplay
					quizMode={true}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleAnswerClick}
					activeFrequency={freqRef.current}
					frequencies={optionsRef.current}
				/>
			</div>
			<AudioButton
				isEqEngaged={isEqEngaged}
				audioURL={audioURL}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				frequency={freqRef.current}
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

export default EqQuiz;
