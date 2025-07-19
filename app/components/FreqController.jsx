"use client";
import React, { useState } from "react";
import FrequencyDisplay from "./FrequencyDisplay";
import OscillatorButton from "./OscillatorButton";

const FreqController = ({ frequencies = [440] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [frequency, setFrequency] = useState(200); // Default frequency
  const handleFrequencyChange = (value) => {
    setFrequency(value);
  };
  return (
    <div className="flex flex-col h-[60vh] md:h-[80vh] items-center overflow-hidden py-2">
      <div className="h-fit overflow-scroll">
        <FrequencyDisplay
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleFrequencyChange={handleFrequencyChange}
          activeFrequency={frequency}
          frequencies={frequencies}
        />
      </div>
      <OscillatorButton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        frequency={frequency}
      />
      <div className="text-2xl">Current Frequency: {frequency} Hz</div>
    </div>
  );
};

export default FreqController;
