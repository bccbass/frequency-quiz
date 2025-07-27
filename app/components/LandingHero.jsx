/** @format */

'use client';
const LandingHero = () => {
    const scrollToSections = () => {
			document.getElementById("game-section").scrollIntoView({
				behavior: "smooth",
			});
		};


	return (
        <div className="w-full px-2 my-12">
		<div className="bg-gradient-to-br w-fit from-blue-50 max-w-6xl py-8 mx-auto rounded-lg to-indigo-100 min-h-screen flex items-center justify-center px-6 md:px-10">
			<div className="max-w-4xl mx-auto text-center">
				{/* Main Hero Section */}
				<div className="mb-12">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
						Train Your
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							{" "}
							Ears
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Develop the critical listening skills that separate good producers
						from great ones. Practice frequency recognition and EQ concepts with
						interactive audio exercises.
					</p>

					<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
						<div className="grid md:grid-cols-2 gap-8 text-left">
							{/* Practice Mode */}
							<div className="flex items-start space-x-4">
								<div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Practice Mode
									</h3>
									<p className="text-gray-600">
										Experiment with different frequencies in a playground
										environment. Toggle EQ boosts on and off to hear how they
										affect real audio.
									</p>
								</div>
							</div>

							{/* Quiz Mode */}
							<div className="flex items-start space-x-4">
								<div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Quiz Mode
									</h3>
									<p className="text-gray-600">
										Test your ears with audio clips featuring frequency boosts.
										Identify which frequencies are emphasized to level up your
										skills.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="space-y-4">
					<p className="text-lg text-gray-700 font-medium">
						Ready to develop your critical listening skills?
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button onClick={scrollToSections} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
							Start Practicing
						</button>

					</div>

					<p className="text-sm text-gray-500 mt-6">
						Works best with headphones or studio monitors
					</p>
				</div>

				{/* Scroll Indicator */}
				{/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<svg
						className="w-6 h-6 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div> */}
			</div>
		</div>
		</div>
	);
};

export default LandingHero;
