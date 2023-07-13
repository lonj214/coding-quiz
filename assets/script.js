var question = document.querySelector("#question");
var choices = document.querySelector("#userChoice")
var progress = document.querySelector("#progress")
var score = document.querySelector("#score")
var initialInput = document.querySelector("#initial-input")
var initialCountSpan = document.querySelector("#initial-count")

var timer;
var timerCount;

var initial = [];

let currentQuestion = {}
let correctAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "Arrays in Javascript can be used to store ___?",
        choice1: "Other arrays",
        choice2: "booleans",
        choice3: "numbers and strings",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "alerts",
        choice2: "strings",
        choice3: "booleans",
        choice4: "numbers",
        answer: 2,
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        choice1: "for loops",
        choice2: "terminal/bash",
        choice3: "JavaScript",
        choice4: "console.log",
        answer: 4,
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        choice1: "parenthesis",
        choice2: "square brackets",
        choice3: "quotes",
        choice4: "curly brackets",
        answer: 1,
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choice1: "parenthesis",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "commas",
        answer: 3,
    },
]

function startQuiz() {
    isWin = false;
    timerCount = 75;
    startTimer()
}

function winGame() {
    correctAnswer.textContent = "You Finished!";
    score++
}