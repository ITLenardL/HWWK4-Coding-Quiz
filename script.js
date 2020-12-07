
//question variable arrays for quiz
var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
    },
    {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings","other arrays","booleans","all of the above",],
    answer: "all of the above",
    },
    {
    title:    "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
    },
    {
    title:   "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
    },
];


//set counter/scoring variables 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;


//starts timer
function start() {


timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;


timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    //end game if timer reaches 0
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); 
    }
}, 1000);


next();
}


//stops timer
function endGame() {
clearInterval(timer);


var quizContent = `
<h2>Game over</h2>

<input type="text" id="name" placeholder="initials"> 
<button onclick="setScore()">Save score</button>`;


document.getElementById("quizBody").innerHTML = quizContent;
}



//transfer remaining time into score variable and store the score on local storage
function setScore() {
    score = timeLeft;
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}




function getScore() {
var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 

<button onclick="clearScore()">Clear high score</button><button onclick="resetGame()">Play again</button>

`;


document.getElementById("quizBody").innerHTML = quizContent;
}


//clears stored high score and initials in the local storage
function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");


resetGame();
}


//reset's the game to beginning 
function resetGame() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeLeft = 0;
timer = null;


document.getElementById("timeLeft").innerHTML = timeLeft;


var quizContent = `
<h1>JavaScript Quiz!</h1>
<h3>Click to play!</h3>
<button onclick="start()">Start!</button>`;


document.getElementById("quizBody").innerHTML = quizContent;
}


//removes 15seconds from the timer for incorrect answer
function incorrect() {
timeLeft -= 15; 
next();
}


//does nothing on correct answer
function correct() {
next();
}


//goes through each question until the questions end 
function next() {
currentQuestion++;


if (currentQuestion > questions.length - 1) {
    endGame();
    return;
}


var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"


for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[answer]\">[choice]</button>"; 
    buttonCode = buttonCode.replace("[choice]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
        buttonCode = buttonCode.replace("[answer]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[answer]", "incorrect()");
    }
    quizContent += buttonCode
}


document.getElementById("quizBody").innerHTML = quizContent;
}

