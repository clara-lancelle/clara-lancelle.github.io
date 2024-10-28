const questions = [
    { question: "Comment s’appelait la première donneuse ?", answer: "martine paul" },
    { question: "À côté de quoi reposent-elles ?", answer: "chêne" },
    { question: "Quel est le prénom de maman ?", answer: "sylvia" },
    { question: "Quelle est ma date de naissance ?", answer: "27 juillet 1939" },
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();

    document.getElementById("submit").addEventListener("submit", checkAnswer);
    document.getElementById("submit").addEventListener("click", checkAnswer);
});

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const birthdateElement = document.getElementById("birthdate");
    const answerElement = document.getElementById("answer");

    if (currentQuestionIndex === 3) {
        // Pour la question de la date de naissance, cacher le champ de texte
        answerElement.classList.add("hidden");
        birthdateElement.classList.remove("hidden");
        questionElement.textContent = `Question ${questions[currentQuestionIndex] + 1} : questions[currentQuestionIndex].question`;
    } else {
        answerElement.classList.remove("hidden");
        birthdateElement.classList.add("hidden");
        questionElement.textContent = questions[currentQuestionIndex].question;
    }
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const birthdateInput = document.getElementById("birthdate");
    const feedbackElement = document.getElementById("feedback");
    const currentQuestion = questions[currentQuestionIndex];

    let isAnswerCorrect = false;

    if (currentQuestionIndex === 0) {
        // Vérifie pour la première question (chêne)
        isAnswerCorrect = answerInput.value.trim().toLowerCase() === currentQuestion.answer || "chene";
    } else if (currentQuestionIndex === 3) {
        // Vérifie pour la date de naissance
        isAnswerCorrect = birthdateInput.value === "1939-07-27"; // Format YYYY-MM-DD
    } else {
        // Vérifie pour les autres questions
        isAnswerCorrect = answerInput.value.trim().toLowerCase() === currentQuestion.answer;
    }

    if (isAnswerCorrect) {
        feedbackElement.textContent = "Bonne réponse";
        feedbackElement.classList.add = "success";
        currentQuestionIndex++;
        answerInput.value = "";
        birthdateInput.value = "";

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            document.getElementById("question-container").classList.add("hidden");
            document.getElementById("congratulations").classList.remove("hidden");
        }
    } else {
        feedbackElement.textContent = "Incorrect, essayez encore.";
        feedbackElement.classList.add = "error";
    }
}
