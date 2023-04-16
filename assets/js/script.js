const quizQuestions = [
  {
    question: "Question 1: ",
    answers: {
      1: "wrong",
      2: "wrong",
      3: "correct",
      4: "wrong",
    },
    correct: "3"
  },
  {
    question: "Question 2: ",
    answers: {
      1: "wrong",
      2: "wrong",
      3: "correct",
      4: "wrong",
    },
    correct: "3"
  },
  {
    question: "Question 3: ",
    answers: {
      1: "wrong",
      2: "correct",
      3: "wrong",
      4: "wrong",
    },
    correct: "2"
  },
]






var startButton = document.querySelector("#start-button");
var backButton = document.querySelector("#go-back");
var submitButton = document.querySelector("#submit-button");
var clearButton = document.querySelector("#clear-button");
var showScores = document.querySelector("#show-scores");

var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var initialList = document.querySelector(".scores");


var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var wrongRight = document.querySelector("#wrong-right");

var timerCount= document.querySelector("#timer-count");


var loseCounter = 0;
var isWin = false;
var timer;
var secondsLeft;
var qIndex = 0;


var currentQuestion = quizQuestions[qIndex].question;
var correctIndex = parseInt(quizQuestions[qIndex].correct);
var correctAnswer = quizQuestions[qIndex].answers[correctIndex];





// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  secondsLeft = 3;
  timerCount.textContent = secondsLeft + " seconds remaining";

  var timer = setInterval(function() {
    secondsLeft--;
    timerCount.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft === 0) {
      timerCount.textContent = "Time";
      clearInterval(timer);
      //timeOut();
    }
  }, 1000);
}

function timeOut() {
  document.querySelector("#done").setAttribute("class", "show");
  document.querySelector("#done-msg").textContent = "Game over! You ran out of time!";
}

function setScore() {
  finalScore.textContent = startTimer.secondsLeft;
  localStorage.setItem("scores", finalScore);
}

function getScores() {
  var storedScores = localStorage.getItem("scores");
  finalScore.textContent = finalScore;
}



function loadQuestion() {
  if (qIndex != quizQuestions.length) {
    currentQuestion = quizQuestions[qIndex].question;
    correctIndex = parseInt(quizQuestions[qIndex].correct);
    correctAnswer = quizQuestions[qIndex].answers[correctIndex];

    document.querySelector("#quiz-question").textContent = currentQuestion;
    document.querySelector("#a1").textContent = quizQuestions[qIndex].answers[1];
    document.querySelector("#a2").textContent = quizQuestions[qIndex].answers[2];
    document.querySelector("#a3").textContent = quizQuestions[qIndex].answers[3];
    document.querySelector("#a4").textContent = quizQuestions[qIndex].answers[4];
  } else {
    document.querySelector("#question-page").setAttribute("class", "hide");
    document.querySelector("#done").setAttribute("class", "show");
  }
  // console.log("qIndex " + qIndex);
  // console.log(currentQuestion);
  // console.log(correctIndex);
  // console.log(correctAnswer + "\n\n");
  qIndex++;
}

// starts game when clicked start button
startButton.addEventListener("click", function() {
  document.querySelector("#initial-page").setAttribute("class", "hide");
  document.querySelector("#question-page").setAttribute("class", "show");
  document.querySelector("#done").setAttribute("class", "hide");
  document.querySelector("#highscores").setAttribute("class", "hide");
  loadQuestion();
  startTimer();
});

// goes back to start page when clicked go back button
backButton.addEventListener("click", function() { 
  document.querySelector("#initial-page").setAttribute("class", "show");
  document.querySelector("#question-page").setAttribute("class", "hide");
  document.querySelector("#done").setAttribute("class", "hide");
  document.querySelector("#highscores").setAttribute("class", "hide");
});

submitButton.addEventListener("click", function() {
  var newScore = document.createElement("li");
  newScore.textContent = initials.value + " - " + "xxx"; 
  initialList.appendChild(newScore);

  localStorage.newScore = newScore.textContent;


  document.querySelector("#done").setAttribute("class", "hide");
  document.querySelector("#highscores").setAttribute("class", "show");
});

clearButton.addEventListener("click", function() {

});

showScores.addEventListener("click", function() { 
  document.querySelector("#initial-page").setAttribute("class", "hide");
  document.querySelector("#highscores").setAttribute("class", "show");
});















answer1.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
  }
});

answer2.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
  }
});

answer3.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
  }
});

answer4.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
  }
});

function correctResponse() {
  wrongRight.style.color = "green";
  wrongRight.textContent = "Correct! Next Question...";
  setTimeout(function() {
      wrongRight.textContent = "";
      loadQuestion();
  }, 1000);
}

function incorrectResponse() {
  wrongRight.style.color = "red";
  wrongRight.textContent = "Wrong! Try again!";
    setTimeout(function() {
      wrongRight.textContent = "";
    }, 1000);
}





