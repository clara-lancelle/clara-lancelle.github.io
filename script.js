const questions = [
    { question: "Comment s’appelait la première donneuse ?", answer: "martine paul" },
    { question: "À côté de quoi reposent-elles ?", answer: "chêne", answer2: "chene" },
    { question: "Quel est le prénom de maman ?", answer: "sylvia" },
    { question: "Quelle est ma date de naissance ?", answer: "27/07/1939" },
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
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
    } else {
        answerElement.classList.remove("hidden");
        birthdateElement.classList.add("hidden");
    }
    questionElement.textContent = `Question ${currentQuestionIndex + 1} : ${questions[currentQuestionIndex].question}`;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const birthdateInput = document.getElementById("birthdate");
    const feedbackElement = document.getElementById("feedback");
    const currentQuestion = questions[currentQuestionIndex];

    let isAnswerCorrect = false;

        // Vérifie
        isAnswerCorrect = answerInput.value.trim().toLowerCase() === currentQuestion.answer || currentQuestion.answer2;

    if (isAnswerCorrect) {
        feedbackElement.textContent = "Bonne réponse";
        feedbackElement.classList.add("success");
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
        feedbackElement.classList.add("error");
    }
}
