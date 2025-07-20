import React from "react";
import FreqController from "./FrequencyPractice";

const Practice = () => {
  return (
    <div className="md:w-3xl mx-auto  flex flex-col items-center my-8 h-screen">
      <FreqController
        frequencies={[
          100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000,
          8000, 12000,
        ]}
      />
    </div>
  );
};

export default Practice;
