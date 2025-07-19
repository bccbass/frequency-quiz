/** @format */

import React from "react";

const FreqButton = ({ freq, activeFrequency, clickHandler, isPlaying }) => (
  <button
    onClick={() => clickHandler(freq)}
    className={`text-2xl w-72 md:w-md  text-white px-4 py-2 rounded  transition ${
      activeFrequency === freq && isPlaying ? "bg-purple-500" : "bg-purple-700"
    } ${isPlaying ? "hover:bg-purple-600" : ""}`}
  >
    {freq >= 1000 ? `${freq / 1000} kHz` : `${freq} Hz`}
  </button>
);

const FrequencyDisplay = ({
  handleFrequencyChange,
  activeFrequency,
  frequencies,
  isPlaying,
}) => {
  return (
    <div className="flex flex-col justify-center space-y-4 h-fit ">
      {frequencies.map((freq, index) => (
        <FreqButton
          key={index}
          isPlaying={isPlaying}
          freq={freq}
          activeFrequency={activeFrequency}
          clickHandler={handleFrequencyChange}
        />
      ))}
    </div>
  );
};

export default FrequencyDisplay;
