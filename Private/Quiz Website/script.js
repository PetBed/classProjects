const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false }, 
            { text: "Blue Whale", correct: true}, 
            { text: "Elephant", correct: false}, 
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vataican City", correct: true }, 
            { text: "Bhutan", correct: false }, 
            { text: "Nepal", correct: false }, 
            { text: "Sri Lanka", correct: false }
        ]  
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false }, 
            { text: "Gobi", correct: false }, 
            { text: "Sahara", correct: false }, 
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false }, 
            { text: "Australia", correct: true }, 
            { text: "Arctic", correct: false }, 
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What is a group of crows called?",
        answers: [
            { text: "A thunder", correct: false }, 
            { text: "A swarm", correct: false }, 
            { text: "A murder", correct: true }, 
            { text: "A pride", correct: false }
        ]
    },
    {
        question: "Compared to their body weight, what animal is the strongest?",
        answers: [
            { text: "Dung Beetle", correct: true }, 
            { text: "Elephant", correct: false }, 
            { text: "Ant", correct: false }, 
            { text: "Cow", correct: false }
        ]
    },
    {
        question: "How many dots appear on a pair of dice?",
        answers: [
            { text: "38", correct: false }, 
            { text: "44", correct: false }, 
            { text: "42", correct: true }, 
            { text: "40", correct: false }
        ]
    },
    {
        question: "Which is the only body part that is fully grown from birth?",
        answers: [
            { text: "Nose", correct: false }, 
            { text: "Skull", correct: false }, 
            { text: "Tongue", correct: false }, 
            { text: "Eyes", correct: true }
        ]
    },
    {
        question: "What is acrophobia a fear of?",
        answers: [
            { text: "Acronyms", correct: false }, 
            { text: "Flying", correct: true }, 
            { text: "Acrobatics", correct: false }, 
            { text: "Strings", correct: false }
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "1", correct: false }, 
            { text: "9", correct: false }, 
            { text: "8", correct: false }, 
            { text: "3", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();