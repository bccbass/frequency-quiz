/** @format */

export const getCorrectAnswer = (optionsArr, currentCorrectAns) => {
	if (currentCorrectAns) {
		const filtered = optionsArr.filter((freq) => freq !== currentCorrectAns);
		return filtered[Math.floor(Math.random() * filtered.length)];
	} else return optionsArr[Math.floor(Math.random() * optionsArr.length)];
};

// Utility: Fisher–Yates shuffle
function shuffleArray(arr) {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

const getDistractors = (optionsArr, correctAns) => {
	const correctIndex = optionsArr.indexOf(correctAns);

	const filteredDeck = optionsArr.filter((_, index) => index !== correctIndex);

	const splitIndex = Math.ceil(filteredDeck.length / 3);
	// Splite the deck into three parts
	// and return a random part as distractors
	const splitDeck =
		correctIndex <= splitIndex
			? filteredDeck.slice(0, splitIndex)
			: correctIndex > splitIndex * 2
			? filteredDeck.slice(-splitIndex)
			: filteredDeck.slice(splitIndex, splitIndex * 2);

	const distractors = shuffleArray(splitDeck);

	if (distractors.length > 3) {
		return distractors.slice(0, 3);
	}
	return distractors;
};

export const getOptions = (optionsArr, correctAns) => {
	const distractors = getDistractors(optionsArr, correctAns);
	const options = [correctAns, ...distractors];
	return shuffleArray(options);
};
