import React from 'react'

const RoundCounter = ({round, totalRounds = 10}) => {
	return (
		<p className={`text-xl md:text-2xl w-full text-right font-semibold mb-2 `}>
			{" "}
			Round {round} | {totalRounds}
		</p>
	);
};

export default RoundCounter