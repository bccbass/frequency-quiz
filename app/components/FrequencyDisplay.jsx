/** @format */

import React from "react";

const FreqButton = ({ freq, clickHandler }) => (
	<button
		onClick={() => clickHandler(freq)}
		className="text-2xl w-md bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
	>
		{freq}{" "}
	</button>
);

const FrequencyDisplay = ({ handleFrequencyChange, frequencies }) => {
	return (
		<div className="flex flex-col justify-center space-y-4 ">
			{frequencies.map((freq, index) => (
				<FreqButton
					key={index}
					freq={freq}
					clickHandler={handleFrequencyChange}
				/>
			))}
		</div>
	);
};

export default FrequencyDisplay;
