/** @format */

export const getCorrectAnswer = (optionsArr, currentCorrectAns) => {
	if (currentCorrectAns) {
		const filtered = optionsArr.filter((freq) => freq !== currentCorrectAns);
		return filtered[Math.floor(Math.random() * filtered.length)];
	} else return optionsArr[Math.floor(Math.random() * optionsArr.length)];
};
// export const getDistractors = (optionsArr, correctIndex) => {
// 	const distractors = optionsArr.filter((_, index) => index !== correctIndex);
// };

// Utility: Fisher–Yates shuffle
function shuffleArray(arr) {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

const getDistractors = (optionsArr, correctIndex) => {
	const splitIndex = Math.floor(optionsArr.length / 2);
	const splitDeck =
		correctIndex <= splitIndex
			? optionsArr.slice(0, splitIndex)
			: optionsArr.slice(splitIndex);
	const distractors = shuffleArray(
		splitDeck.filter((_, index) => index !== correctIndex)
	);
	return distractors;
};

export const getOptions = (optionsArr, correctAns) => {
    const correctIndex = optionsArr.indexOf(correctAns);
	const correctAnswer = optionsArr[correctIndex];
	const distractors = getDistractors(optionsArr, correctIndex);
	const options = [correctAnswer, ...distractors];
	return shuffleArray(options);
};
