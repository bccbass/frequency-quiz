/** @format */

"use client";
import React, { useContext } from "react";
import FreqButton from "./FreqButton";
import FadeInLi from "./FadeInLi";

const FrequencyDisplay = ({
	clickHandler,
	activeFrequency,
	frequencies,
	quizMode = false,
	isPlaying,
}) => {

	return (
		<div className="flex flex-col justify-center space-y-4 h-fit  p-1 w-fit mx-12">
			{frequencies.map((freq, index) => (
				<FadeInLi index={index} key={index}>
					{/* Using FadeInLi to wrap FreqButton for fade-in effect */}
					<FreqButton
						clickHandler={clickHandler}
						quizMode={quizMode}
						key={index}
						isPlaying={isPlaying}
						freq={freq}
						activeFrequency={activeFrequency}
					/>
				</FadeInLi>
			))}
		</div>
	);
};

export default FrequencyDisplay;
