const questions = [
    { question: "À côté de quoi reposent-elles ?", answer: "chêne" },
    { question: "Comment s’appelait la première ?", answer: "martine paul" },
    { question: "Quel est le prénom de maman ?", answer: "sylvia" },
    { question: "Quelle est ma date de naissance ?", answer: "27 juillet 1939" },
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();

    document.getElementById("submit").addEventListener("click", checkAnswer);
});

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const feedbackElement = document.getElementById("feedback");
    const currentQuestion = questions[currentQuestionIndex];

    if (answerInput.value.trim().toLowerCase() === currentQuestion.answer) {
        feedbackElement.textContent = "Correct !";
        currentQuestionIndex++;
        answerInput.value = "";

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            document.getElementById("question-container").classList.add("hidden");
            document.getElementById("congratulations").classList.remove("hidden");
        }
    } else {
        feedbackElement.textContent = "Incorrect, essayez encore.";
    }
}
