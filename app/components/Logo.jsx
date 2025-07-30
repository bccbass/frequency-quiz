/** @format */

import React from "react";

const Logo = ({ darkTheme = false }) => {
	return (
		<a
			href="/"
			className="flex flex-col items-center justify-center w-24 md:w-54 mb-6 ml-4 md:m-4"
		>
			<img
				// URL={"freqquiz_logo_smaller.png"}
				alt="FREQquiz Logo"
				src={"/freqquiz_logo_smaller.png"}
				width={'100%'}
				height={'auto'}
			/>
			<h1
				className={` -mt-4 font-extralight text-start ${
					darkTheme ? "text-gray-800 text-2xl md:text-6xl" : "text-3xl md:text-5xl"
				}`}
			>
				<strong className="font-extrabold">FREQ</strong>uiz
			</h1>
		</a>
	);
};

export default Logo;
