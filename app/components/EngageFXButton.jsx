/** @format */

import React from "react";
import { BiEqualizer } from "react-icons/bi";

const EngageFXButton = ({ isFXEngaged, setIsFXEngaged, title = "EQ" }) => {
	return (
		<div className="group relative w-full ">
			<p className="group-hover:opacity-100 opacity-0 transition duration-500 absolute -bottom-2 text-sm bg-white rounded-sm outline-gray-200 text-gray-700 px-2 z-50">
				Toggle {title}
			</p>
			<button
				onClick={() => setIsFXEngaged(!isFXEngaged)}
				className={`pl-2 w-full my-2 text-5xl md:text-6xl ${
					isFXEngaged ? "text-red-400" : "text-gray-400"
				} `}
			>
				<BiEqualizer />
			</button>
		</div>
	);
};

export default EngageFXButton;
