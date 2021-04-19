var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question1');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var timer = 60;
var clearTime;


var startTimer = function() {

    var countdown = function() {
        timer--;
        timerEl.textContent = "Time:" + timer;
        if (timer === 0) {
            endTimer();
            end();
            alert("Time is up!");
        }
    }

    var timeInterval = setInterval(countdown, 1000); 
    var endTimer = function() {
        clearInterval(timeInterval);
    }

    clearTime = endTimer;

    quest1();
}

var quest1 = function () {
    questionEl.innerHTML = 'How do you render "Hello World" in an alert box?';

    one.innerHTML = '<button id="a">aletBox("Hello World");</button>';
    two.innerHTML = '<button id="b">console.log("Hello World");</button>';
    three.innerHTML = '<button id="c">alert("Hello World");</button>';
    four.innerHTML = '<button id="d">prompt("Hello World");</button>';

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");

    var clickedAnswer = function() {
        wrongAnswer();
        quest2();
    }

    a.addEventListener("click", clickedAnswer);
    b.addEventListener("click", clickedAnswer);
    c.addEventListener("click", quest2);
    d.addEventListener("click", clickedAnswer);
}






start.onclick = startTimer;