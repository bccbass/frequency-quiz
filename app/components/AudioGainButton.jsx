/** @format */
"use client";
import React, { useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import * as Tone from "tone";

const AudioGainButton = ({
    isGainEngaged=true,
    gainValue = 0,
    isPlaying,
    setIsPlaying,
    audioURL = "./electric_bass.mp3",
}) => {
	const playerRef = useRef(null);
	const gainRef = useRef(null);

	// Initialize audio chain once - removed the isInitializedRef flag
	useEffect(() => {
		// Always initialize when component mounts
		console.log("Initializing audio chain...");

		// Create Player
		const player = new Tone.Player(audioURL);
		player.autostart = false;
		player.loop = true;
		player.volume.value = -Infinity; // Start muted

		// Create a peaking filter (bell curve) to boost specific frequencies

		// Optional: Add a gain node for overall volume control
		const gain = new Tone.Gain(1);

		// Connect the chain: Player → Filter → Gain → Destination
		player.connect(gain);
		gain.toDestination();

		playerRef.current = player;
		gainRef.current = gain;

		// Cleanup on unmount
		return () => {
			console.log("Cleaning up audio resources...");

			// Stop audio first
			if (player.state === "started") {
				player.stop();
			}

			// Dispose of all resources
			player.dispose();
			gain.dispose();

			// Clear refs
			playerRef.current = null;
			gainRef.current = null;
		};
	}, []); // Empty dependency array - reinitialize on every mount

	// Handle play/pause
	useEffect(() => {
		const handleAudio = async () => {
			if (!playerRef.current) {
				console.log("No player available");
				return;
			}

			if (isPlaying) {
				console.log("Starting playback...");
				await Tone.start();

				if (playerRef.current.loaded) {
					playerRef.current.start();
					playerRef.current.volume.rampTo(-12, 0.15);
				} else {
					console.log("Loading audio file...");
					playerRef.current
						.load()
						.then(() => {
							if (playerRef.current) {
								playerRef.current.start();
								playerRef.current.volume.rampTo(-12, 0.15);
							}
						})
						.catch((error) => {
							console.error("Error loading audio:", error);
						});
				}
			} else {
				console.log("Stopping playback...");
				playerRef.current.volume.rampTo(-Infinity, 0.5);
				setTimeout(() => {
					if (playerRef.current && playerRef.current.state === "started") {
						playerRef.current.stop();
					}
				}, 500);
			}
		};

		handleAudio();
	}, [isPlaying]);

	
	// Handle gain changes - COMBINED into one effect to prevent conflicts
	useEffect(() => {
		if (gainRef.current) {
			let targetGain;

			if (isGainEngaged) {
				// Convert dB to linear gain if needed, or use dB directly
				// Tone.js gain nodes work in linear values by default
				// For dB: use Tone.dbToGain(gainValue)
				targetGain = Tone.dbToGain(gainValue);
				console.log(
					`Gain engaged: setting to ${gainValue}dB (${targetGain} linear)`
				);
			} else {
				// When disengaged, set to unity gain (0dB = 1.0 linear)
				targetGain = 1.0; // Unity gain
				console.log("Gain disengaged: setting to unity gain");
			}

			// Set the gain to the absolute target value
			gainRef.current.gain.rampTo(targetGain, 0.02);
		}
	}, [isGainEngaged, gainValue]); // Combined dependencies

	const handleClick = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="flex flex-col items-center">
			<button
				onClick={handleClick}
				className={`text-6xl ${
					isPlaying ? "text-red-400" : "text-gray-400"
				} transition ease-in-out m-8 hover:text-red-500`}
			>
				{isPlaying ? (
					<FaRegCircleStop fontSize={"inherit"} />
				) : (
					<FaRegPlayCircle fontSize={"inherit"} />
				)}
			</button>

			{/* Debug info - remove in production */}
			{/* <div className="text-xs text-gray-500">: {gainValue}</div> */}
		</div>
	);
};

export default AudioGainButton;
