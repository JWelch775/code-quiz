var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question1');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var form = document.getElementById('main-info');
var displayScores = localStorage.getItem('name');
var displayNames = localStorage.getItem('score');
var options = document.getElementById('options');
var savedNames = [];
var savedScores = [];
var savedName;
var savedScore;
var clearTime;
var score = 100;

var timer = 60;

var wrongAnswer = function() {
    score = score - 25;
    return score;
}

var subtractTime = function() {
    timer = timer - 10;
    return timer;
}

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

    question1();
}

var question1 = function () {
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
        subtractTime();
        question2();
    }

    a.addEventListener("click", clickedAnswer);
    b.addEventListener("click", clickedAnswer);
    c.addEventListener("click", question2);
    d.addEventListener("click", clickedAnswer);
}

var question2 = function() {
    questionEl.innerHTML = "A very useful tool used during development and debugging for printing content in the debugger";

    one.innerHTML = '<button id="e">javascript</button>';
    two.innerHTML = '<button id="f">console.log</button>';
    three.innerHTML = '<button id="g">for loops</button>';
    four.innerHTML = '<button id="h">terminal/bash</button>';

    var e = document.getElementById("e");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var h = document.getElementById("h");

    var clickedAnswer = function() {
        wrongAnswer();
        subtractTime();
        question3();
    }

    e.addEventListener("click", clickedAnswer);
    f.addEventListener("click", question3);
    g.addEventListener("click", clickedAnswer);
    h.addEventListener("click", clickedAnswer);  
} 

var question3 = function() {    
    questionEl.innerHTML = "String values must be enclosed with ____ when being assigned to variables";
    
    one.innerHTML = '<button id="i">Commas</button>';
    two.innerHTML = '<button id="j">Curly Brackets</button>';
    three.innerHTML = '<button id="k">Parentheses</button>';
    four.innerHTML = '<button id="l">Quotes</button>';

    let i = document.getElementById("i");
    let j = document.getElementById("j");
    let k = document.getElementById("k");
    let l = document.getElementById("l");

    let clickedAnswer = function() {
        wrongAnswer();
        subtractTime();
        question4();
    }

    i.addEventListener("click", clickedAnswer);
    j.addEventListener("click", clickedAnswer);
    k.addEventListener("click", clickedAnswer);
    l.addEventListener("click", question4);
}

let question4 = function() {    
    questionEl.innerHTML = "Commonly used data types do NOT include:";
    
    one.innerHTML = '<button id="m">Strings</button>';
    two.innerHTML = '<button id="n">Alerts</button>';
    three.innerHTML = '<button id="o">Boolean</button>';
    four.innerHTML = '<button id="p">Integer</button>';

    let m = document.getElementById("m");
    let n = document.getElementById("n");
    let o = document.getElementById("o");
    let p = document.getElementById("p");

    let clickedAnswer = function() {
        wrongAnswer();
        subtractTime();
        end();
    }

    m.addEventListener("click", clickedAnswer);
    n.addEventListener("click", end);
    o.addEventListener("click", clickedAnswer);
    p.addEventListener("click", clickedAnswer);
      
}

var end = function() {
    
    console.log(score);
    form.innerHTML = '<div id="reset"><button onclick="window.location.reload();">Retry</button></div><form id="name-form"><label id="your-score-txt"></label></><input type="text" id="yourtext" name="name" placeholder=" Your Name Here"></input><input type="submit" value="Submit" text="submit" id="submit-me"></input></form>'
    var finalScore = document.getElementById('your-score-txt');
    finalScore.textContent = "Your Score:" + " " + score;
    var nameForm = document.getElementById('name-form');

    var results = function() {

        savedName = document.getElementById('yourtext').value;
        savedScore = score;

        localStorage.setItem("name", savedName);
        localStorage.setItem("score", savedScore);

        showScore();  
    }
    
    //if questions answered stop timer
    if (timer > 0) {
        clearTime();
    }

    var submit = document.getElementById('submit-me');
    submit.addEventListener("click", function(event){
        event.preventDefault()
      });
    submit.addEventListener("click", results);    
}

var showScore = function() {
    form.innerHTML = '<div id="all-scores"><h1>High Scores</h1><div class="container"><ul id="stored-scores" class="userscore"></ul><ul id="stored-names" class="username"></ul></div></div>';
    options.innerHTML = '<div id="reset"><button onclick="window.location.reload();">Retry</button></div>';
    var storedScores = document.getElementById("stored-scores");
    var storedNames = document.getElementById("stored-names");
    displayNames = localStorage.getItem('score');
    displayScores = localStorage.getItem('name');
    storedScores.innerHTML = "<li>" + displayScores + "</li>";
    storedNames.innerHTML = "<li>" + displayNames + "</li>";

    console.log(displayScores);
    console.log(displayNames);
}

start.onclick = startTimer;

document.getElementById('high-score').onclick = showScore;