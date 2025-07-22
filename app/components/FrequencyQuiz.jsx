/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "./FrequencyDisplay";
import OscillatorButton from "./OscillatorButton";
import { GameContext } from "./GameContext";
import { getCorrectAnswer, getOptions } from "./lib/helperFuncs";

const FrequencyQuiz = ({ frequencies }) => {
	const { incrementAttempts, markCorrect } = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
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

	return (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2"
		>
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
