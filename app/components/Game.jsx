/** @format */

"use client";
import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Game = ({ children }) => {
	const { gameState, resetGame } = useContext(GameContext);

	return (
		<div className="flex items-center justify-center w-full">
			<div></div>
			{gameState.round <= 10 ? (
				children
			) : (
				<div className="text-center text-2xl font-bold">
					<p className="text-accent">Great Job!</p>
					<p className="text-gray-500">
						You received {gameState.score} points!
					</p>
					<button onClick={resetGame} className="btn btn-primary mt-4">
						Play Again
					</button>
				</div>
			)}
		</div>
	);
};

export default Game;
