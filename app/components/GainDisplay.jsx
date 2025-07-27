/** @format */

"use client";
import React, { useContext } from "react";
import GainButton from "./GainButton";

const GainDisplay = ({
	clickHandler,
	activeGainVal,
	gainOptions,
	quizMode = false,
	isPlaying,
}) => {
	return (
		<div className="flex flex-col justify-center space-y-4 h-fit  p-1">
			{gainOptions.map((gainValue, index) => (
				<GainButton
					clickHandler={clickHandler}
					quizMode={quizMode}
					key={index}
					isPlaying={isPlaying}
					gainValue={gainValue}
					activeGainVal={activeGainVal}
				/>
			))}
		</div>
	);
};

export default GainDisplay;
