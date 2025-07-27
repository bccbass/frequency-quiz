import React from 'react'
import Image from "next/image";


const Logo = () => {
  return (
		<a href='/' className="flex flex-col items-center justify-center w-fit mb-6 m-4">
	
			<Image
				// URL={"freqquiz_logo_smaller.png"}
				alt="FREQquiz Logo"
				src={"/freqquiz_logo_smaller.png"}
				width={200}
				height={100}
			/>
			<h1 className="text-3xl md:text-5xl -mt-4 font-extralight text-start">
				<strong className="font-extrabold">FREQ</strong>uiz
			</h1>
		</a>
	);
}

export default Logo