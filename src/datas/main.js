import { questions } from "./questions";

let categorySelected;
let numQuestionsToBeAsked = 0; // number of questions to be asked
let points = 0; // 1 point = a good answer
let questionsAnswered = []; // contains ids of questions answered

// getters
export function getCategorySelected() {
	return categorySelected;
}

export function getNumQuestionsToBeAsked() {
	return numQuestionsToBeAsked;
}

export function getNumAnswers() {
	return questionsAnswered.length;
}

export function getPoints() {
	return points;
}

export function getQuestionsAnswered() {
	return questionsAnswered;
}

// setters
export function setCategorySelected(category) {
	categorySelected = category;

	return categorySelected;
}

export function setNumQuestionsToBeAsked(NumQuestions) {
	numQuestionsToBeAsked = NumQuestions;

	return numQuestionsToBeAsked;
}

// other functions
export function addPoint() {
	points++;
	return points;
}

export function addQuestionAnswered(id) {
	questionsAnswered.push(id);
}

// return a number between min (inclusive) and max (inclusive)
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// get a random question not already asked filtered with category name
export function getRandomQuestion() {
	const questionsCanBeAsked = questions.filter(
		(question) =>
			!questionsAnswered.includes(question.id) &&
			question.categoryName === categorySelected
	);

	// error if there's no question available
	if (questionsCanBeAsked.length === 0)
		throw Error("No more question available");

	// get random question from questions filtered
	return questionsCanBeAsked[getRandomInt(0, questionsCanBeAsked.length - 1)];
}
