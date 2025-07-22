/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "./FrequencyDisplay";
import OscillatorButton from "./OscillatorButton";
import { GameContext } from "./GameContext";
import RoundCounter from "./RoundCounter";
import { getCorrectAnswer, getOptions } from "./lib/helperFuncs";

const FrequencyQuiz = ({ frequencies }) => {
	const { gameState, incrementAttempts, markCorrect } = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const frequency = getCorrectAnswer(frequencies);
	const freqRef = useRef(frequency);
	const frequencyGameOptions = getOptions(frequencies, freqRef.current);
	const optionsRef = useRef(frequencyGameOptions);

	const handleUserAnswer = (input, freq) => {
		if (input == freq) {
			markCorrect();
			freqRef.current = getCorrectAnswer(frequencies, freqRef.current);
			optionsRef.current = getOptions(frequencies, freqRef.current);
		} else {
			incrementAttempts();
		}
	};

	return !isGameStarted ? (
		<button
			onClick={() => {
				setIsGameStarted(true);
				setIsPlaying(true);
			}}
			className="rounded-sm py-4 w-72 bg-pink-700 text-2xl font-semibold hover:bg-pink-600 transition outline mt-12 uppercase"
		>
			Let's Go!
		</button>
	) : (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2"
		>
			<RoundCounter round={gameState.round} />
			<div className="h-fit overflow-scroll">
				<FrequencyDisplay
					quizMode={true}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleUserAnswer}
					activeFrequency={freqRef.current}
					frequencies={optionsRef.current}
				/>
			</div>
			<OscillatorButton
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				frequency={freqRef.current}
			/>
		</div>
	);
};

export default FrequencyQuiz;
