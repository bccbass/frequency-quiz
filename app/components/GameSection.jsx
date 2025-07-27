/** @format */

"use client";
import React from "react";
import NavMenuItems from "./NavMenuItems";
import menuItems from "../lib/menuItems";

const GameSection = () => {
	return (
		<div id="game-section" className="mt-10 mb-48">
			<h2 className=" text-center text-6xl  w-fit mx-auto font-semibold mb-8 ">
				<span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
					{" "}
					Explore
				</span>
			</h2>
			<NavMenuItems
				classStyle={`text-4xl border mx-auto my-8 text-accent flex flex-col items-center justify-center  px-2 w-72 border-accent rounded-lg hover:bg-accent hover:text-gray-200 transition-all duration-300 ease-in-out`}
			/>
		</div>
	);
};

export default GameSection;
