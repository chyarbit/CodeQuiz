// Define variables
var start = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
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
    answers: ["Dominant Object Model","Document Objective Mode","Document Object Model", "Dominant Objective Model"],
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
    correctAnswer: "Strings are arrays."
    },
    { 
    question: "Given var x = [1,2,3], what will console.log(x[9]) state?",
    answers: ["undefined","0","8","9"],
    correctAnswer: "undefined"
    },
]

// Add event listeners to the answer options.  When clicked, it will run checkAnswer function
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

// create function to set the timer
function setTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
  // If timer goes down to 0, send this message
  function sendMessage() {
      timer.textContent = "Sorry!  You are out of time!";
      // NEEDED IMPROVEMENT: force quiz to stop when 0 seconds are left
  }

// create a function to render questions 
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



// Function to check answer
function checkAnswer(answer){
    // If user gets question correctly   
    if (answer == questions[questionPosition].correctAnswer){
        results.innerHTML = "That's Correct!";
        // move on to the next question
        questionPosition++;
        renderQuestion();
    }
    // If user gets question wrong
    else{
        results.innerHTML = "Incorrect!";
        // subtract 10 seconds from the timer
        secondsLeft -= 10;
    }
}
// ** NEED IMPROVEMENT- I cannot get this function to work
// After all questions have been answered
// Compute score and show score in a new element
  //function showScore() {
    //var score = document.createElement("score");
    
    //var numCorrect = 0;
    //for (var i = 0; i < questions.length; i++) {
      //if (questions[i] === questions[i].correctAnswer) {
        //numCorrect++;
      //}
    //}
    
    //score.appendChild("You received " +"numCorrect" + " questions correct!")
    //return score;
  //}

// Call functions ...//
//function showScore()