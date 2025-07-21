/** @format */
import React, { useContext, useState } from "react";
import Game from "./Game";

import { GameContext } from "./GameContext";

const GameProvider = ({ children }) => {
	const [gameState, setGameState] = useState({
		round: 1,
		attempts: 0,
		score: 0,
		correct: false,
	});

	const markCorrect = () => {
		const calculatedPoints = 200 - gameState.attempts * 50;

		setGameState({
			round: gameState.round + 1,
			attempts: 0,
			score: gameState.score + calculatedPoints,
		});
	};

	const resetGame = () => {
		setGameState({
			round: 1,
			attempts: 0,
			score: 0,
			correct: false,
		});
	};
	const incrementAttempts = () => {
		setGameState({ ...gameState, attempts: gameState.attempts + 1 });
	};

	// const setCorrect = (value) => {
	// 	setGameState({ ...gameState, correct: value });
	// };

	return (
		<GameContext
			value={{
				gameState,
				incrementAttempts,
				resetGame,
				markCorrect,
			}}
		>
			{children}
		</GameContext>
	);
};

export default GameProvider;
