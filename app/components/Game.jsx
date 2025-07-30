/** @format */

"use client";
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Game = ({ children }) => {
	const { gameState, resetGame } = useContext(GameContext);

	return (
		<div className="flex items-center justify-center w-full">
			{gameState.round <= 10 ? (
				<div className="">{children}</div>
			) : (
				<div className="text-center text-2xl font-bold">
					<p className="text-accent my-4">Great Job!</p>
					<p className="my-4">You received {gameState.score} points!</p>
					<button
						onClick={resetGame}
						className="rounded-sm md:py-4 py-2 px-4 md:px-0 md:w-72 bg-pink-700 hover:bg-pink-600 transition outline mt-4"
					>
						Play Again
					</button>
				</div>
			)}
		</div>
	);
};

export default Game;
