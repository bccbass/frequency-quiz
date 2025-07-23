/** @format */

"use client";
import React, { useContext } from "react";
import FreqButton from "./FreqButton";
import { GameContext } from "../context/GameContext";

const FrequencyDisplay = ({
	clickHandler,
	activeFrequency,
	frequencies,
	quizMode = false,
	isPlaying,
}) => {

	return (
		<div className="flex flex-col justify-center space-y-4 h-fit  p-1">
			{frequencies.map((freq, index) => (
				<FreqButton
					clickHandler={clickHandler}
					quizMode={quizMode}
					key={index}
					isPlaying={isPlaying}
					freq={freq}
					activeFrequency={activeFrequency}
				/>
			))}
		</div>
	);
};

export default FrequencyDisplay;
