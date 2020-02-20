// variables 
var timeEl = document.querySelector(".time");
var questionElement = document.getElementById("question");
var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("ques-box");
var buttonsElement = document.getElementById("buttons");
var buttonOne = document.getElementById("btn0");
var buttonTwo = document.getElementById("btn1");
var buttonThree = document.getElementById("btn2");
var buttonFour = document.getElementById("btn3");
var userInitials = document.getElementById("initials");
var userScore = document.getElementById("score");
var enter = document.getElementById("enter");
var card = document.querySelector(".card");
var clicks = 0;
var score = 0;
var secondsLeft = 60;

//hides the questions and form
card.style.visibility = "hidden";
questionBox.style.visibility = "hidden";


startButton.addEventListener("click", beginGame)

function beginGame() {
    setTime();
    startButton.style.display = "none";
    questionBox.style.visibility = "visible";
    answerSet();
}

function answerSet() {
    questionElement.textContent = "CSS stands for: "
    buttonOne.textContent = "Cascading Style Sheet";
    buttonTwo.textContent = "Chocolate Sprinkle Sundae";
    buttonThree.textContent = "Carry Sally Sanders";
    buttonFour.textContent = "Coding Startup Section";
}

//replaces first set of questions with second set
function swap() {
    questionElement.textContent = "Javascript is the: "
    buttonOne.textContent = "programming language of HTML and the Web";
    buttonTwo.textContent = "the easiest way to make coffee";
    buttonThree.textContent = "the language of beans";
    buttonFour.textContent = "hypertext transfer protocol";
}

//buttons 
buttonOne.addEventListener("click", function () {
    score++;
    clicks++;
    swap();
});
buttonTwo.addEventListener("click", function () {
    secondsLeft -= 20;
    clicks++;
    swap();
});
buttonThree.addEventListener("click", function () {
    secondsLeft -= 20;
    clicks++;
    swap();


});
buttonFour.addEventListener("click", function () {
    secondsLeft -= 20;
    clicks++;
    swap();
});

// saves the score and initials
enter.addEventListener("click", function (event) {
    event.preventDefault();

var initialsValue = document.querySelector("#initials").value;
var scoreValue = document.querySelector("#score").value;

   
    localStorage.setItem("initialsValue", initialsValue);
    localStorage.setItem("scoreValue", scoreValue);
});



function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0 || clicks === 2) {
            clearInterval(timerInterval);
            alert("Your final score is " + score +"!");
            questionBox.style.display = "none";
            card.style.visibility = "visible";
        
        }

    }, 1000);
}







