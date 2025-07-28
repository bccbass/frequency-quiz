/** @format */

"use client";
import React from "react";
import GainButton from "./GainButton";
import FadeInLi from "./FadeInLi";


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
				<FadeInLi index={index} key={index}>
					{/* Using FadeInLi to wrap GainButton for fade-in effect */}	
				<GainButton
					clickHandler={clickHandler}
					quizMode={quizMode}
					key={index}
					isPlaying={isPlaying}
					gainValue={gainValue}
					activeGainVal={activeGainVal}
				/>
				</FadeInLi>
			))}
		</div>
	);
};

export default GainDisplay;
