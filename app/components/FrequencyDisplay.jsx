/** @format */

import React from "react";

const FreqButton = ({ freq, activeFrequency, clickHandler, isPlaying }) => (
	<button
		onClick={() => clickHandler(freq)}
		className={`text-2xl w-72 md:w-md  text-white px-4 py-2 rounded  transition ${
			activeFrequency === freq ? "bg-pink-600 font-bold outline" : "bg-pink-700"
		} ${isPlaying && activeFrequency !== freq ? "hover:bg-pink-600" : ""}`}
	>
		{freq >= 1000 ? `${freq / 1000} kHz` : `${freq} Hz`}
	</button>
);

const FrequencyDisplay = ({
	clickHandler,
	activeFrequency,
	frequencies,
	isPlaying,
}) => {
	return (
		<div className="flex flex-col justify-center space-y-4 h-fit  p-1">
			{frequencies.map((freq, index) => (
				<FreqButton
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
