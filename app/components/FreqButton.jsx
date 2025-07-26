/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FreqButton = ({
	freq,
	clickHandler,
	activeFrequency,
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
				checkAnswer(freq, activeFrequency), clickHandler(freq, activeFrequency);
			}}
			className={`text-2xl w-72 md:w-md cursor-pointer text-center  text-white px-4 py-2 rounded  transition ${
				!quizMode && activeFrequency === freq
					? "bg-pink-600 font-bold outline"
					: "bg-pink-700"
			} ${
				!quizMode && isPlaying && activeFrequency !== freq
					? "hover:bg-pink-600"
					: ""
			}`}
		>
			{freq >= 1000 ? `${freq / 1000} kHz` : `${freq} Hz`}
		</motion.div>
	);
};

export default FreqButton;
