/** @format */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import * as Tone from "tone";

const OscillatorButton = ({ frequency, isPlaying, setIsPlaying }) => {
	const oscillatorRef = useRef(null);
	const isStartedRef = useRef(null);

	useEffect(() => {
		// Create oscillator once, but don't start it yet
		const osc = new Tone.Oscillator(440, "sine").toDestination();
		osc.volume.value = -Infinity; // Start muted
		oscillatorRef.current = osc;

		return () => {
			if (osc.state !== "stopped") {
				osc.stop();
			}
			osc.dispose();
		};
	}, []);

	useEffect(() => {
		const handleAudio = async () => {
			if (oscillatorRef.current && isPlaying) {
				// Start audio context and oscillator only once
				if (isPlaying) {
					// Below throws err due to start times not Matching
					// await Tone.start()
					// This seems to solve err, although not 'awaiting' Tone creation
					const now = Tone.now();
					oscillatorRef.current.start(now);
					isStartedRef.current = true;
				}
				// Fade in
				oscillatorRef.current.volume.rampTo(-12, 0.15);
			} else if (oscillatorRef.current) {
				// Fade out
				oscillatorRef.current.volume.rampTo(-Infinity, 0.5);
			}
		};

		handleAudio();
	}, [isPlaying]);

	useEffect(() => {
		if (oscillatorRef.current) {
			oscillatorRef.current.frequency.value = frequency;
		}
	}, [frequency, isPlaying]);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<button
			onClick={handleClick}
			className={`text-6xl ${
				isPlaying ? "text-red-400 " : "text-red-400 "
			} transition ease-in-out m-8`}
		>
			{isPlaying ? (
				<FaRegCircleStop fontSize={"inherit"} className="" />
			) : (
				<FaRegPlayCircle fontSize={"inherit"} />
			)}
		</button>
	);
};

export default OscillatorButton;
