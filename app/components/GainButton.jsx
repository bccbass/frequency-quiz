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
	const [animationState, setAnimationState] = useState("idle");

	const variants = {
		idle: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			backgroundColor: "var(--color-pink-600",
			color: "white",
		},
		incorrect: {
			x: [-16, 16, -12, 12, -8, 8, 0],
			transition: { duration: 0.6 },
		},
		correct: {
			// opacity: [0.5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
			y: [-16, 16, -12, 12, -8, 8, -12, 12, -16, 16, 0],
			color: [
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#FFFFFF",
				"#41ab13",
				"#41ab13",
			],

			backgroundColor: ["#41ab13"],
			transition: { duration: 1.2 },
		},
	};

	const checkAnswer = (input, ans) => {
		if (!quizMode) return;
		else if (input === ans) {
			setAnimationState("correct");
			setTimeout(() => {
				setIsCorrect(true);
				setAnimationState("idle");
				clickHandler(gainValue, activeGainVal);
			}, 600);
		} else {
			setIsCorrect(false);
			setAnimationState("incorrect");

			setTimeout(() => {
				setAnimationState("idle");
				clickHandler(gainValue, activeGainVal);
			}, 600);
		}
	};

	return (
		<motion.div
			variants={variants}
			animate={animationState}
			disabled={!isPlaying}
			onMouseDown={() => {
				quizMode
					? checkAnswer(gainValue, activeGainVal)
					: clickHandler(gainValue, activeGainVal);
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
