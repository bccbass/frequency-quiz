/** @format */

"use client";
import React, { useState, useRef, useContext } from "react";
import GainDisplay from "../GainDisplay";
import AudioButton from "../AudioGainButton";
import { GameContext } from "../../context/GameContext";
import RoundCounter from "../RoundCounter";
import { getCorrectAnswer, getOptions } from "../../lib/helperFuncs";
import { gainOptions } from "../../lib/gameData";
import { audioFiles } from "../../lib/gameData";
import EngageFXButton from "../EngageFXButton";
import AudioFilesList from "../AudioFilesList";
import { GiExitDoor } from "react-icons/gi";

const GainQuiz = () => {
	const { gameState, markCorrect, incrementAttempts } = useContext(GameContext);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isGainEngaged, setIsGainEngaged] = useState(true);
	const [audioURL, setAudioURL] = useState(null);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const correctGainVal = getCorrectAnswer(gainOptions);
	const correctGainRef = useRef(correctGainVal);
	const gainGameOptions = getOptions(gainOptions, correctGainRef.current);
	const optionsRef = useRef(gainGameOptions);

	const handleAnswerClick = (input, gain) => {
		if (input == gain) {
			markCorrect();
			correctGainRef.current = getCorrectAnswer(
				gainOptions,
				correctGainRef.current
			);
			optionsRef.current = getOptions(gainOptions, correctGainRef.current);
		} else {
			incrementAttempts();
		}
	};



	return !isGameStarted ? (
		<AudioFilesList
			audioFiles={audioFiles}
			setAudioURL={setAudioURL}
			setIsGameStarted={setIsGameStarted}
		/>
	) : (
		<div
			id="game"
			className="flex flex-col h-screen md:h-[80vh] items-center overflow-hidden w-78 md:w-md"
		>
			<div className="flex justify-between w-full items-center mt-2 mb-4">
				<EngageFXButton
					title="gain"
					isFXEngaged={isGainEngaged}
					setIsFXEngaged={setIsGainEngaged}
				/>

				<RoundCounter round={gameState.round} />
			</div>
			<div className="h-fit overflow-scroll">
				<GainDisplay
					quizMode={true}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					clickHandler={handleAnswerClick}
					activeGainVal={correctGainRef.current}
					gainOptions={optionsRef.current}
				/>
			</div>

			<AudioButton
				isGainEngaged={isGainEngaged}
				audioURL={audioURL}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				gainValue={correctGainRef.current}
			/>
			<button
				onMouseDown={() => setIsGameStarted(false)}
				className="text-neutral-200 group transition duration-300 ease-in-out text-xl"
			>
				<GiExitDoor className=" text-4xl mt-12 group-hover:text-accent transition duration-300 ease-in-out" />{" "}
				<span className="text-sm uppercase group-hover:text-accent transition duration-300 ease-in-out">
					{" "}
					Exit
				</span>
			</button>
		</div>
	);
};

export default GainQuiz;
