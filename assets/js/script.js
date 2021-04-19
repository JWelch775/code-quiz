var timerEl = document.getElementById('timer');
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
}

start.onclick = startTimer;