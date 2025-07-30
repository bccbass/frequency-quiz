/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "../FrequencyDisplay";
import OscillatorButton from "../OscillatorButton";
import { GameContext } from "../../context/GameContext";
import RoundCounter from "../RoundCounter";
import { getCorrectAnswer, getOptions } from "../../lib/helperFuncs";
import { frequencies } from "../../lib/gameData";

const FrequencyQuiz = () => {
	const { gameState, markCorrect, incrementAttempts } = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
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

	return !isGameStarted ? (
		<button
			onClick={() => {
				setIsGameStarted(true);
				setIsPlaying(true);
			}}
			className="rounded-sm px-4 py-2 text-2xl md:py-4 md:w-72 bg-pink-700 md:text-2xl font-semibold hover:bg-pink-600 transition outline mt-12 uppercase"
		>
			Let's Go!
		</button>
	) : (
		<div
			id="game"
			className="flex w-80 flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2 md:w-md "
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
			<OscillatorButton
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				frequency={freqRef.current}
			/>
		</div>
	);
};

export default FrequencyQuiz;
