/** @format */
import React, { useState } from "react";

import { GameContext } from "../context/GameContext";

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
