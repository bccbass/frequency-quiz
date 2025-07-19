'use client'
import React, {useState} from 'react'
import FrequencyDisplay from './FrequencyDisplay';
import ButtonPlay from './ButtonPlay';

const FreqController = () => {
    const [frequency, setFrequency] = useState(440); // Default frequency
    const handleFrequencyChange = (value) => {
        setFrequency(value);
    };
  return (
		<div className='flex flex-col items-center'>
			FreqController
			<FrequencyDisplay
				handleFrequencyChange={handleFrequencyChange}
				frequencies={[440, 880, 1760]}
			/>
			<ButtonPlay frequency={frequency} />
			<div className="text-2xl">Current Frequency: {frequency} Hz</div>
		</div>
	);
}

export default FreqController