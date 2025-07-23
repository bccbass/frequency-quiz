/** @format */

"use client";
import React, { useState } from "react";
import FrequencyPractice from "./FrequencyPractice";
import FrequencyQuiz from "./FrequencyQuiz";
import GameProvider from "./GameProvider";
// import Game from "./Game";
import dynamic from "next/dynamic";
const Game = dynamic(() => import("./Game"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});

import { FaWaveSquare } from "react-icons/fa";

const toggleStyles = "px-2 uppercase py-2 w-1/2 inline-block text-center";

const inactiveStyles = "hover:bg-sky-700 transition-colors duration-300";
const activeStyles = "bg-foreground text-background ";
const FrequenciesSection = () => {
	const [practiceMode, setPracticeMode] = useState(true);
	return (
		<div>
			<h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent rounded-sm w-fit mx-auto px-4 mt-2 uppercase">
				Frequency <FaWaveSquare className="inline pb-2" />
			</h1>
			<div className="">
				<div className="text-2xl w-md font-bold mb-4 outline rounded-sm  mx-auto">
					<a
						href="#game"
						onMouseDown={() => setPracticeMode(true)}
						className={`${toggleStyles} ${
							practiceMode ? activeStyles : inactiveStyles
						} rounded-l-sm border-r`}
					>
						practice
					</a>
					<a
						href="#game"
						onMouseDown={() => setPracticeMode(false)}
						className={`${toggleStyles} ${
							practiceMode === false ? activeStyles : inactiveStyles
						} rounded-r-sm`}
					>
						quiz
					</a>
				</div>
				<div className="flex flex-col items-center">
					{practiceMode ? (
						<FrequencyPractice />
					) : (
						<GameProvider>
							<Game>
								<FrequencyQuiz/>
							</Game>
						</GameProvider>
					)}
				</div>
			</div>
		</div>
	);
};

export default FrequenciesSection;
