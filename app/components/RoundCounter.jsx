import React from 'react'

const RoundCounter = ({round, totalRounds = 10}) => {
	return (
		<p className={`text-2xl w-full text-right font-semibold `}>
			{" "}
			Round {round} | {totalRounds}
		</p>
	);
};

export default RoundCounter