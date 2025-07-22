
'use client';
import React from "react";
import FreqButton from "./FreqButton";

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
					quizMode={quizMode}
					key={index}
					isPlaying={isPlaying}
					freq={freq}
					activeFrequency={activeFrequency}
					clickHandler={clickHandler}
				/>
			))}
		</div>
	);
};

export default FrequencyDisplay;
