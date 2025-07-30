/** @format */

import React from "react";

const Logo = ({ darkTheme = false, feature = false }) => {
	return (
		<a
			href="/"
			className={`flex flex-col items-center justify-center aspect-auto md:w-54 mb-6  md:m-4 ${
				feature ? "w-48 text-4xl md:text-6xl" : "ml-2 w-32 text-2xl md:text-4xl"
			}`}
		>
			<img
				// URL={"freqquiz_logo_smaller.png"}
				alt="FREQquiz Logo"
				src={"/freqquiz_logo_smaller.png"}
				width={"100%"}
				height={"auto"}
			/>
			<h1
				className={` -mt-4 font-extralight text-start ${
					darkTheme && "text-gray-800"
				}`}
			>
				<strong className="font-extrabold">FREQ</strong>uiz
			</h1>
		</a>
	);
};

export default Logo;
