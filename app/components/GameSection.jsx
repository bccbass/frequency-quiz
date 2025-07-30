/** @format */

"use client";
import React from "react";
import LandingMenuItems from "./LandingMenuItems";

const GameSection = () => {
	return (
		<div id="game-section" className="pt-20 mb-20">
			<LandingMenuItems
				classStyle={`text-4xl mx-auto bg-accent my-8 text-gray-100 flex flex-col items-center justify-center  px-2 w-72  rounded-lg hover:bg-orange-400 py-4 shadow-md hover:text-gray-200 transition-all duration-300 ease-in-out`}
			/>
		</div>
	);
};

export default GameSection;
