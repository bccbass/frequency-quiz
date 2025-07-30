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
				clickHandler(freq, activeFrequency);
			}, 600);
		} else {
			setIsCorrect(false);
			setAnimationState("incorrect");

			setTimeout(() => {
				setAnimationState("idle");
				clickHandler(freq, activeFrequency);
			}, 600);
		}
	};



	return (
		<motion.div
			variants={variants}
			animate={animationState}
			disabled={!isPlaying}
			onMouseDown={() => {quizMode ?
				checkAnswer(freq, activeFrequency) : clickHandler(freq, activeFrequency)
			}}
			className={`text-2xl mx-16 w-72 md:w-86  cursor-pointer text-center  text-white px-4 md:py-2 py-1 rounded  transition ${
				!quizMode && activeFrequency === freq
					? "bg-pink-600 font-bold outline"
					: "bg-pink-700"
			} ${
				!quizMode && isPlaying && activeFrequency !== freq
					? "hover:bg-pink-600"
					: ""
			}`}
		>
			{/* <motion.div 
			style={{opacity : animationState === "correct" ? "1" : "0"}}
			className="w-screen h-screen flex items-center justify-center absolute inset-0">
				<span className="uppercase text-5xl font-semibold bg-accent p-8 rounded-md outline">
					Correct!!
				</span>
			</motion.div> */}
			{freq >= 1000 ? `${freq / 1000} kHz` : `${freq} Hz`}
		</motion.div>
	);
};

export default FreqButton;
