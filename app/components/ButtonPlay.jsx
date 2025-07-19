/** @format */

"use client";
import React, { useState, useEffect, useRef } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import * as Tone from "tone";

const ButtonPlay = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const oscillatorRef = useRef(null);

	useEffect(() => {
		const osc = new Tone.Oscillator(440, "sine").toDestination();

		oscillatorRef.current = osc;

		return () => {
			osc.stop();
			osc.dispose();
		};
	}, []);

	useEffect(() => {
		if (oscillatorRef.current) {
			if (isPlaying) {
				const startToneContext = async () => {
					if (Tone.getContext() !== "running") {
						console.log("Starting Tone context");
						await Tone.start();
					}
				};
				startToneContext();
				oscillatorRef.current.volume.value = -Infinity; // Start with volume at -Infinity
				// oscillatorRef.current.start();

				oscillatorRef.current.volume.rampTo(-12, 0.15); // Fade in over 100ms
			} else {
				oscillatorRef.current.volume.rampTo(-Infinity, 0.5); // Fade out over 300ms
				// oscillatorRef.current.stop(4); // Stop after 1 second
			}
		}
	}, [isPlaying]);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
		console.log("Button clicked, isPlaying:", !isPlaying);
	};

	return (
		<button
			onClick={handleClick}
			className={`text-6xl ${
				isPlaying ? "text-red-400 " : "text-red-400 "
			} transition ease-in-out m-8`}
		>
			{isPlaying ? (
				<StopCircleIcon fontSize={"inherit"} className="" />
			) : (
				<PlayCircleIcon fontSize={"inherit"} />
			)}
		</button>
	);
};

export default ButtonPlay;
