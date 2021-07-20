"use strict";
//variables for dom manipulation
var body = document.body;
var pomodoro = document.getElementById("pomodoro");
var shortBreak = document.getElementById("shortBreak");
var longBreak = document.getElementById("longBreak");
var minute = document.getElementById('minute');
var seconds = document.getElementById('seconds');
var timeTo = document.getElementById("time-to");
var startButton = document.getElementById("startButton");
var startCountDown;
//Logic for 3 menu buttons above timer.
pomodoro.addEventListener("click", function () {
    body.classList.remove("bg-blue-600");
    body.classList.remove("bg-green-500");
    body.classList.add("bg-red-500");
    minute.innerHTML = "25";
    seconds.innerHTML = "00";
    timeTo.innerHTML = "Time for work!";
});
shortBreak.addEventListener("click", function () {
    body.classList.add("bg-blue-600");
    body.classList.remove("bg-green-500");
    body.classList.remove("bg-red-500");
    minute.innerHTML = "05";
    seconds.innerHTML = "00";
    timeTo.innerHTML = "Time for a break!";
});
longBreak.addEventListener("click", function () {
    body.classList.remove("bg-blue-600");
    body.classList.add("bg-green-500");
    body.classList.remove("bg-red-500");
    minute.innerHTML = "15";
    seconds.innerHTML = "00";
    timeTo.innerHTML = "Time for a break!";
});
//changing start-to-stop, stop-to-start
function buttonOnChange() {
    if (startButton.innerHTML.includes('START')) {
        startButton.innerHTML = "STOP";
    }
    else {
        startButton.innerHTML = "START";
    }
}
//countdown for the clock
function countDown() {
}
//pomodoro bittiginda otomatikman break e geciyor, break bittiginde ise otomatiman geri donuyor
//otomatik olarak long break e gitmiyor ama long break otomatikman pomodoroa ya geri donuyor.s
//minutes and seconds 
startButton.addEventListener('click', function () {
    buttonOnChange();
    //burada short break e gitmesi icin bi komut yazabiliriz.
});
