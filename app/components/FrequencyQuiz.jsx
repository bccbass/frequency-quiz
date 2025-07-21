/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import FrequencyDisplay from "./FrequencyDisplay";
import OscillatorButton from "./OscillatorButton";
import { GameContext } from "./GameContext";

const frequencies = [60, 125, 250, 500, 1000, 3000, 4000, 8000, 16000];
const getRandomFrequency = (frequencies, currentFreq) => {
	if (currentFreq) {
		const filtered = frequencies.filter((freq) => freq !== currentFreq);
		return filtered[Math.floor(Math.random() * filtered.length)];
	} else return frequencies[Math.floor(Math.random() * frequencies.length)];
};
const FrequencyQuiz = ({}) => {
	const {
		gameState,
		incrementRound,
		incrementAttempts,
		markCorrect,
		incrementScore,
		resetAttempts,
	} = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
	const frequency = getRandomFrequency(frequencies);
	const freqRef = useRef(frequency);

	const handleUserAnswer = (input, freq) => {
		if (input == freq) {
			markCorrect();
			freqRef.current = getRandomFrequency(frequencies, freqRef.current);
		} else {
			incrementAttempts();
		}
	};

	// useEffect(() => {
	// 	if (isCorrect) {
	// 		freqRef.current = getRandomFrequency(frequencies);
	// 		setIsCorrect(null);
	// 		setRoundInfo((prev) => ({
	// 			...prev,
	// 			score: prev.score + 200,
	// 			round: prev.round + 1,
	// 			attempts: 0,
	// 		}));
	// 	} else if (isCorrect === false) {
	// 		setIsCorrect(null);

	// 		setRoundInfo((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
	// 	}
	// }, [isCorrect]);

	return (
		<div
			id="game"
			className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2"
		>
			<div className="h-fit overflow-scroll">
				<p>round {gameState.round}</p>
				<p>attempts {gameState.attempts}</p>
				<p>score {gameState.score}</p>
				<FrequencyDisplay
					quizMode={true}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleUserAnswer}
					activeFrequency={freqRef.current}
					frequencies={frequencies}
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
