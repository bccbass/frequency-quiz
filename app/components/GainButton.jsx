/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GainButton = ({
	gainValue,
	clickHandler,
	activeGainVal,
	isPlaying,
	quizMode = false,
}) => {
	const [isCorrect, setIsCorrect] = useState(null);
	const checkAnswer = (input, ans) => {
		if (!quizMode) return;
		else if (input === ans) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	useEffect(() => {
		if (isCorrect !== null) {
		}
	}, [isCorrect]);

	return (
		<motion.div
			disabled={!isPlaying}
			onMouseDown={() => {
				checkAnswer(gainValue, activeGainVal),
					clickHandler(gainValue, activeGainVal);
			}}
			className={`text-2xl w-72 md:w-md cursor-pointer text-center  text-white px-4 py-2 rounded  transition ${
				!quizMode && activeGainVal === gainValue
					? "bg-pink-600 font-bold outline"
					: "bg-pink-700"
			} ${
				!quizMode && isPlaying && activeGainVal !== gainValue
					? "hover:bg-pink-600"
					: ""
			}`}
		>
			{gainValue} Db
		</motion.div>
	);
};

export default GainButton;
