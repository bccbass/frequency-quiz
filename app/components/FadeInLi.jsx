/** @format */

import React from "react";
import { motion } from "framer-motion";

const FadeInLi = ({ children, index }) => {
	return (
		<motion.div
        layout
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1, duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export default FadeInLi;
