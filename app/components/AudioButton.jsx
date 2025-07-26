/** @format */
"use client";
import React, { useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import * as Tone from "tone";

const AudioButton = ({
	isEqEngaged=true,
	frequency,
	isPlaying,
	setIsPlaying,
	audioURL = "./electric_bass.mp3",
}) => {
	const playerRef = useRef(null);
	const filterRef = useRef(null);
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
		const filter = new Tone.Filter({
			type: "peaking", // Bell-shaped boost/cut
			frequency: frequency || 1000, // Initial frequency
			gain: 10, // +10dB boost
			Q: 4.5, // Narrow band (higher Q = narrower)
		});

		// Optional: Add a gain node for overall volume control
		const gain = new Tone.Gain(1);

		// Connect the chain: Player → Filter → Gain → Destination
		player.connect(filter);
		filter.connect(gain);
		gain.toDestination();

		playerRef.current = player;
		filterRef.current = filter;
		gainRef.current = gain;

		console.log(`Audio chain initialized with ${frequency}Hz boost`);

		// Cleanup on unmount
		return () => {
			console.log("Cleaning up audio resources...");

			// Stop audio first
			if (player.state === "started") {
				player.stop();
			}

			// Dispose of all resources
			player.dispose();
			filter.dispose();
			gain.dispose();

			// Clear refs
			playerRef.current = null;
			filterRef.current = null;
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

	// Handle frequency changes - update the filter frequency in real-time
	useEffect(() => {
		if (filterRef.current && frequency) {
			// Smoothly transition to new frequency
			filterRef.current.frequency.rampTo(frequency, 0.1);
			console.log(`Filter frequency changed to ${frequency}Hz`);
		}
	}, [frequency]);

	useEffect(() => {
		if (playerRef.current && filterRef.current) {
			// Update filter gain if isEqEngaged changes
			if (isEqEngaged) {
				filterRef.current.frequency.rampTo(frequency, 0.02);
				console.log(`Filter frequency set to ${frequency}Hz`);
			} else {
				// If EQ is disengaged, set gain to a neutral value
				filterRef.current.frequency.rampTo(10, 0.02); // Mute the filter
				console.log("EQ disengaged, filter frequency set to 1000Hz");
			}
		}
	}, [isEqEngaged]);

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
			{/* <div className="text-xs text-gray-500">Freq: {frequency}Hz</div> */}
		</div>
	);
};

export default AudioButton;
