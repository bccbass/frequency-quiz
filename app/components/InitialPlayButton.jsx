import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";


const InitialPlayButton = ({handleClick}) => {
  return (
    
            <button
                onClick={handleClick}
                // className={`text-6xl ${
                //     isPlaying ? "text-red-400" : "text-gray-400"
                // } transition ease-in-out m-8 hover:text-red-500`}
                className={`text-6xl text-gray-400 transition ease-in-out m-8 hover:text-red-500`}
            >

                    <FaRegPlayCircle fontSize={"inherit"} />
                    dumy bttn
            </button>
  )
}

export default InitialPlayButton