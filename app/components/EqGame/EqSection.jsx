/** @format */

"use client";
import React, { useState } from "react";
import EqPractice from "./EqPractice";
import EqQuiz from "./EqQuiz";
import GameProvider from "../GameProvider";
import { BiEqualizer } from "react-icons/bi";
import dynamic from "next/dynamic";
const Game = dynamic(() => import("../Game"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});


const toggleStyles = "px-2 uppercase py-2 w-1/2 inline-block text-center";

const inactiveStyles = "hover:bg-sky-700 transition-colors duration-300";
const activeStyles = "bg-foreground text-background ";
const EqSection = () => {
	const [practiceMode, setPracticeMode] = useState(true);
	return (
		<div>
			<h1 className="text-4xl md:text-5xl  font-bold mb-8 text-accent rounded-sm w-fit mx-auto px-4 py-2 uppercase">
				EQ <BiEqualizer className="inline pb-2" />
			</h1>
			<div className="">
				<div className="md:text-2xl text-md w-78 md:w-md font-bold md:mb-4 outline rounded-sm  mx-auto">
				
					<button
						// href="#game"
						onMouseDown={() => setPracticeMode(true)}
						className={`${toggleStyles} ${
							practiceMode ? activeStyles : inactiveStyles
						} rounded-l-sm border-r`}
					>
						practice
					</button>
					<button
						// href="#game"
						onMouseDown={() => setPracticeMode(false)}
						className={`${toggleStyles} ${
							practiceMode === false ? activeStyles : inactiveStyles
						} rounded-r-sm`}
					>
						quiz
					</button>
				</div>
				<div className="flex flex-col items-center">
					{practiceMode ? (
						<EqPractice />
					) : (
						<GameProvider>
							<Game>
								<EqQuiz />
							</Game>
						</GameProvider>
					)}
				</div>
			</div>
		</div>
	);
};

export default EqSection;
