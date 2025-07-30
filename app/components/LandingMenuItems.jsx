/** @format */

"use client";
import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import menuItems from "../lib/menuItems";
// import { CiWavePulse1 } from "react-icons/ci";

const LandingMenuItems = ({
	classStyle = "group",
	handleSetOpen,
	fixed = false,
}) => {
	const gameItems = menuItems.filter(
		(item) => item.title != "About" && item.title != "Home"
	);
	const aboutObj = menuItems.find((item) => item.title === "About");

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<h2>
				<span className="text-transparent text-5xl uppercase font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
					{" "}
					Games
				</span>
			</h2>
			{gameItems.map((item, i) => (
				<Link
					prefetch={false}
					role="link"
					aria-label={item.title}
					key={i}
					// Logic to close menu if on homepage and link is an anchor
					onClick={() =>
						handleSetOpen && pathname == "/" && item.href.includes("#")
							? handleSetOpen(false)
							: null
					}
					className={classStyle}
					href={item.href}
				>
					<p>{item.title}</p>
					<p className="text-sm mt-2">{item.description}</p>
				</Link>
			))}
			<Link
				role="link"
				aria-label={aboutObj.title}
				className={
					"text-2xl mx-auto mt-16 text-background underline block font-semibold  hover:opacity-80 transition-all duration-300 ease-in-out"
				}
				href={aboutObj.href}
			>
				About FREQuiz
			</Link>
		</Suspense>
	);
};

export default LandingMenuItems;
