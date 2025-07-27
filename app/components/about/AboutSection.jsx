/** @format */

const AboutSection = () => {
	return (
		// <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-50">
		<div className="bg-white max-w-4xl mx-auto mt-16 rounded-lg shadow-sm p-8 mb-32">
			<h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
				About FREQuiz
			</h1>

			{/* What It Does Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
					What It Does
				</h2>

				<div className="space-y-4 text-gray-700 leading-relaxed">
					<p>
						FREQuiz is an interactive frequency training tool designed to help
						music producers, audio engineers, and students develop their
						critical listening skills. Think of it as a gym for your ears – a
						place to practice identifying and understanding how different
						frequencies affect the sound of music.
					</p>

					<p>
						The app focuses on one of the most fundamental skills in audio
						production:
						<span className="font-semibold text-blue-600">
							{" "}
							frequency recognition
						</span>
						. Whether you're trying to carve out space in a dense mix, identify
						problematic resonances, or add warmth and presence to a vocal, being
						able to hear and identify specific frequency ranges is essential.
						This tool lets you practice these skills in a controlled,
						interactive environment.
					</p>

					<div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
						<p className="mb-4">
							<span className="font-semibold text-blue-800">Practice Mode</span>{" "}
							gives you a playground to explore different frequencies and hear
							how EQ boosts affect real audio. Toggle frequencies on and off,
							experiment with different settings, and start to internalize what
							250Hz vs 1kHz vs 4kHz actually sounds like in context.
						</p>

						<p>
							<span className="font-semibold text-blue-800">Quiz Mode</span>{" "}
							puts your ears to the test. Listen to audio clips with frequency
							boosts applied, then identify which frequency range is being
							emphasized. It's the kind of ear training that directly translates
							to better mixing decisions in your DAW.
						</p>
					</div>

					<p className="text-lg font-medium text-gray-800 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
						The goal isn't to memorize frequency charts – it's to develop the
						intuitive listening skills that separate good engineers from great
						ones.
					</p>
				</div>
			</section>

			{/* Technical Section */}
			<section>
				<h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
					The Technical Side
				</h2>

				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3 text-green-700">
							Stack & Approach
						</h3>

						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>
								This project was built using{" "}
								<span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
									Next.js
								</span>{" "}
								and
								<span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm mx-1">
									React
								</span>
								, with
								<span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
									Tone.js
								</span>{" "}
								handling all the real-time audio processing and filtering. The
								audio pipeline creates a signal chain of Player → Filter →
								Destination, allowing for precise frequency manipulation that
								mirrors what you'd find in professional audio software.
							</p>

							<p>
								The biggest challenge was managing Web Audio API lifecycle
								within React's component system. Audio resources need careful
								initialization and cleanup to prevent memory leaks and ensure
								consistent performance across component mounting/unmounting
								cycles. Each audio instance maintains its own filter chain and
								processing pipeline.
							</p>

							<p>
								<span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
									Tone.js
								</span>{" "}
								was chosen for its powerful audio synthesis and effects
								capabilities, specifically the ability to create precise peaking
								filters for frequency-specific boosts. The library handles all
								the Web Audio API complexity while providing an intuitive
								interface for real-time parameter manipulation.
							</p>
						</div>
					</div>

					<div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
						<h3 className="text-xl font-semibold text-green-800 mb-3">
							Why Build This?
						</h3>

						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>
								As a professional musician and producer, I know how crucial
								frequency recognition is for mixing and production work. But
								practicing this skill usually means expensive plugins or awkward
								training software. I wanted to create something that was
								accessible, focused, and actually fun to use.
							</p>

							<p>
								From a development perspective, this project was an excellent
								opportunity to explore real-time audio processing in the
								browser, tackle the complexities of Web Audio API lifecycle
								management, and create an interactive learning experience that
								bridges music production concepts with modern web development.
							</p>

							<p className="font-medium text-green-800">
								The intersection of audio engineering and web development
								presents unique challenges – from managing audio context states
								to handling real-time parameter automation – that push beyond
								typical web app development patterns.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
		// </div>
	);
};

export default AboutSection;
