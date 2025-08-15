const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a JavaScript Framework?",
        answers: ["Python Script", "JQuery", "Django", "NodeJS"],
        correct: 2
    },
    {
        question: "Which is used for Connect To Database?",
        answers: ["HTML", "PHP", "JS", "All"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
    answered = false;
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach((btn, index) => {
        btn.innerText = questionObj.answers[index];
        btn.style.backgroundColor = "#3498db";
        btn.disabled = false;
    });
}

function selectAnswer(selectedIndex) {
    if (answered) return; // prevent multiple clicks
    answered = true;

    const correctIndex = questions[currentQuestionIndex].correct;
    const answerButtons = document.querySelectorAll(".answer-btn");

    if (selectedIndex === correctIndex) {
        score++;
        answerButtons[selectedIndex].style.backgroundColor = "green";
    } else {
        answerButtons[selectedIndex].style.backgroundColor = "red";
        answerButtons[correctIndex].style.backgroundColor = "green";
    }

    // Disable all buttons after choosing
    answerButtons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
        document.getElementById("next-btn").style.display = "none";
    }
}

showQuestion();
