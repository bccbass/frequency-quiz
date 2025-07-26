import React from 'react'

const AudioFilesList = ({audioFiles}) => {
  return (
        <div className="flex flex-col items-center gap-2 my-10">
            {/* <p className='text-gray-400  text-xl font-light'>Choose an audio source</p> */}
            {audioFiles.map((audioFile, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setIsGameStarted(true);
                        setAudioURL(audioFile.url);
                        // setIsPlaying(true);
                    }}
                    className=" text-neutral-200 my-2   text-xl font-semibold hover:border-neutral-50 border-b-3 border-background transition hover:text-neutral-50  uppercase"
                >
                    {audioFile.title}
                </button>
            ))}
        </div>  )
}

export default AudioFilesList