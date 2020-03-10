// Define variables
var start = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var timeLeft = document.getElementById("wrongAnswerTimer");
var intro = document.getElementById("intro");
var results = document.getElementById("results");
var secondsLeft = 60;

// Use an object to define the questions with key pairs //
var questions = [
    {
    question: "What does CSS stand for?",
    answers: ["Consumer Style Sheet","Cascading Style Sheet", "Correlating Style Sheet", "Contact Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
    },
    { 
    question: "What does DOM stand for?",
    answers: ["Dominant Object Model","Document Objective Mode","Document Object Model"],
    correctAnswer: "Document Object Model"
    },
    { 
    question: "What are the basic components needed to develop a webpage?",
    answers: ["HTML, CSS, and Javascript","HTML, Bootstrap, and Javascript","HTML, CSS, and DOM","CSS, Bootstrap, Javascript, and DOM"],
    correctAnswer: "HTML, CSS, and Javascript"
    },
    { 
    question: "Which statement below is true?",
    answers: ["A variable can only be a number.","Functions can only result in a numerical output.","Strings are arrays.","You can create better websites when using a Mac versus a PC"],
    correctAnswer: "Strings are arrays"
    },
    { 
    question: "Given var x = [1,2,3], what will console.log(x[9]) state?",
    answers: ["undefined","0","8","9"],
    correctAnswer: "undefined"
    },
]


// If user gets question correctly, move on to the next question
// If user gets question wrong, subtract 10 seconds to the timer
answerA.addEventListener("click", function() {
    checkAnswer(questions[questionPosition].answers[0]);
    
}); 
answerB.addEventListener("click", function() {
    checkAnswer(questions[questionPosition].answers[1]);
}); 
answerC.addEventListener("click", function() {
    checkAnswer(questions[questionPosition].answers[2]);
}); 
answerD.addEventListener("click", function() {
    checkAnswer(questions[questionPosition].answers[3]);
}); 

// Function to check answer
function checkAnswer(answer){
    if (answer == questions[questionPosition].correctAnswer){
        results.innerHTML = "That's Correct!";
        questionPosition++;
        renderQuestion();
    }
    else{
        results.innerHTML = "Incorrect!";
        //here is where we want to decrease the timer for an incorrect answer
        secondsLeft -= 10;
    }
    // Moves question position up

 
}
//Render questions to HTMLs
var questionStart = 0;
var questionPosition = questionStart;

function renderQuestion(){
    // This will hide the intro so the questions start
    intro.style.display = "none";

    console.log(questions[questionPosition].answers)

    question.textContent = questions[questionPosition].question;
   
    answerA.innerText = questions[questionPosition].answers[0];
    answerB.innerText = questions[questionPosition].answers[1];
    answerC.innerText= questions[questionPosition].answers[2];
    answerD.innerText = questions[questionPosition].answers[3];
    }
//will need to make sure to have questionsStart stops at the last question

// Start quiz time by clicking the button and move to first question
// Define time left in seconds


function setTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
// If timer goes down to 0, send this message
function sendMessage() {
    timer.textContent = "Sorry!  You are out of time!";
}

// After all questions have been answered, click button to submit quiz and display score

// Call functions ...//
