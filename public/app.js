//variables for dom manipulation
let body = document.body;
let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let clock = document.getElementById("clock");
let timeTo = document.getElementById("time-to");
let startButton = document.getElementById("startButton");

pomodoro.addEventListener("click", () => {
  body.classList.remove("bg-blue-600");
  body.classList.remove("bg-green-500");
  body.classList.add("bg-red-500");

  clock.innerHTML = "25:00";
  timeTo.innerHTML = "Time for work!";
});

shortBreak.addEventListener("click", () => {
  body.classList.add("bg-blue-600");
  body.classList.remove("bg-green-500");
  body.classList.remove("bg-red-500");

  clock.innerHTML = "05:00";
  timeTo.innerHTML = "Time for a break!";
});

longBreak.addEventListener("click", () => {
  body.classList.remove("bg-blue-600");
  body.classList.add("bg-green-500");
  body.classList.remove("bg-red-500");

  clock.innerHTML = "15:00";
  timeTo.innerHTML = "Time for a break!";
});


//todo: add timer 