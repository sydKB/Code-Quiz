const quizQuestions = [
  {
    question: "Question 1: ",
    answers: {
      1: "wrong answer",
      2: "wrong answer",
      3: "correct answer",
      4: "wrong answer",
    },
    correct: "3"
  },
  // {
  //   question: "Question 2: ",
  //   answers: {
  //     1: "correct answer",
  //     2: "wrong answer",
  //     3: "wrong answer",
  //     4: "wrong answer",
  //   },
  //   correct: "1"
  // },
  // {
  //   question: "Question 3: ",
  //   answers: {
  //     1: "wrong answer",
  //     2: "correct answer",
  //     3: "wrong answer",
  //     4: "wrong answer",
  //   },
  //   correct: "2"
  // },
  // {
  //   question: "Question 4: ",
  //   answers: {
  //     1: "wrong answer",
  //     2: "wrong answer",
  //     3: "wrong answer",
  //     4: "correct answer",
  //   },
  //   correct: "4"
  // },
  // {
  //   question: "Question 5: ",
  //   answers: {
  //     1: "correct answer",
  //     2: "wrong answer",
  //     3: "wrong answer",
  //     4: "wrong answer",
  //   },
  //   correct: "1"
  // },
]

var initialPage = document.querySelector("#initial-page");
var questionPage = document.querySelector("#question-page");
var donePage = document.querySelector("#done-page");
var scorePage = document.querySelector("#highscores");

var startButton = document.querySelector("#start-button");
var backButton = document.querySelector("#go-back");
var submitButton = document.querySelector("#submit-button");
var clearButton = document.querySelector("#clear-button");

var showScores = document.querySelector("#show-scores");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var scoreList = document.querySelector(".scores");

var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var wrongRight = document.querySelector("#wrong-right");

var timerCount = document.querySelector("#timer-count");
var secondsLeft;
var timer;

var qIndex = 0;
var currentQuestion = quizQuestions[qIndex].question;
var correctIndex = parseInt(quizQuestions[qIndex].correct);
var correctAnswer = quizQuestions[qIndex].answers[correctIndex];

function startTimer() {
  secondsLeft = 60;
  timerCount.textContent = secondsLeft + " seconds remaining";

  timer = setInterval(function() {
    secondsLeft--;
    timerCount.textContent = secondsLeft + " seconds remaining";
    if (secondsLeft <= 0) {
      stopGame();
      timeOut();
    }
  }, 1000);
}

function timeOut() {
  questionPage.style.display = "none";
  donePage.style.display = "block";
  document.querySelector("#done-msg").textContent = "Game over! You ran out of time!";
}

// function setScore() {
//   finalScore.textContent = startTimer.secondsLeft;
//   localStorage.setItem("scores", finalScore);
// }

// function getScores() {
//   var storedScores = localStorage.getItem("scores");
//   finalScore.textContent = finalScore;
// }

// Loads question. If no more, stops timer and displays score on donePage
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
    finalScore.textContent = "Your final score is: " + secondsLeft;
    stopGame();
    questionPage.style.display = "none";
    donePage.style.display = "block";
  }
  // console.log("qIndex " + qIndex);
  // console.log(currentQuestion);
  // console.log(correctIndex);
  // console.log(correctAnswer + "\n\n");
  qIndex++;
}

// Starts game when "Start" button is clicked
startButton.addEventListener("click", function() {
  initialPage.style.display = "none";
  questionPage.style.display = "block";
  donePage.style.display = "none";
  scorePage.style.display = "none";
  qIndex = 0;
  loadQuestion();
  startTimer();
});

// Goes back to start page when "Go Back" button is clicked
backButton.addEventListener("click", function() { 
  initialPage.style.display = "block";
  questionPage.style.display = "none";
  donePage.style.display = "none";
  scorePage.style.display = "none";
});

// New score is added to document as list item and stored in local storage
submitButton.addEventListener("click", function() {
  var newScore = document.createElement("li");
  newScore.innerHTML = initials.value + " - " + secondsLeft; 
  //try set item... but with list?
  
  scoreList.appendChild(newScore);
  localStorage.setItem("newScore", newScore.textContent);

  // Switches from donePage to scorePage
  donePage.style.display = "none";
  scorePage.style.display = "block";
});

// Clears highscores
clearButton.addEventListener("click", function() {
  localStorage.clear();
  scoreList.innerHTML = "";
});

// Shows highscores when "View Highscores" is clicked
showScores.addEventListener("click", function() { 
  stopGame();
  initialPage.style.display = "none";
  questionPage.style.display = "none";
  scorePage.style.display = "block";
});

function stopGame() {
  timerCount.textContent = "Time";
  clearInterval(timer);
}















answer1.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
    secondsLeft -= 3;
  }
});

answer2.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
    secondsLeft -= 3;
  }
});

answer3.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
    secondsLeft -= 3;
  }
});

answer4.addEventListener("click", function(event) {
  if(event.target.textContent === correctAnswer) {
    correctResponse();
  } else {
    incorrectResponse();
    timer.secondsLeft -= 3;
  }
});

function correctResponse() {
  wrongRight.style.color = "green";
  wrongRight.textContent = "Correct! Next Question...";
  setTimeout(function() {
      wrongRight.textContent = "";
      loadQuestion();
  }, 500);
}

function incorrectResponse() {
  wrongRight.style.color = "red";
  wrongRight.textContent = "Wrong! Try again!";
  timerCount.textContent = "-3 seconds . . . . . ";
    setTimeout(function() {
      wrongRight.textContent = "";
    }, 1000);
}