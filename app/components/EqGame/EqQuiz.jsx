/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import AudioButton from "../AudioButton";
import { GameContext } from "../../context/GameContext";
import RoundCounter from "../RoundCounter";
import { getCorrectAnswer, getOptions } from "../../lib/helperFuncs";
import { frequencies } from "../../lib/gameData";
import { audioFiles } from "../../lib/gameData";

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
		<div className="flex flex-col items-center gap-2 my-10">
			{audioFiles.map((audioFile, index) => (
				<button
					key={index}
					onClick={() => {
						setIsGameStarted(true);
						setAudioURL(audioFile.url);
						// setIsPlaying(true);
					}}
					className=" text-neutral-200 my-2   text-xl font-semibold hover:border-neutral-50 border-b-3 border-background transition hover:text-neutral-50  uppercase"
				>
					{audioFile.title}
				</button>
			))}
		</div>
	) : (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2 w-md"
		>
			<RoundCounter round={gameState.round} />
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
		</div>
	);
};

export default EqQuiz;
