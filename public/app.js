//variables for dom manipulation
let body = document.body;
let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');
let timeTo = document.getElementById("time-to");
let startButton = document.getElementById("startButton");

let startCountDown;

//Logic for 3 menu buttons above timer.
pomodoro.addEventListener("click", () => {
  body.classList.remove("bg-blue-600");
  body.classList.remove("bg-green-500");
  body.classList.add("bg-red-500");

  minute.innerHTML = "25";
  seconds.innerHTML = "00";
  timeTo.innerHTML = "Time for work!";
});

shortBreak.addEventListener("click", () => {
  body.classList.add("bg-blue-600");
  body.classList.remove("bg-green-500");
  body.classList.remove("bg-red-500");

  minute.innerHTML = "05";
  seconds.innerHTML = "00";
  timeTo.innerHTML = "Time for a break!";
});

longBreak.addEventListener("click", () => {
  body.classList.remove("bg-blue-600");
  body.classList.add("bg-green-500");
  body.classList.remove("bg-red-500");

  minute.innerHTML = "15";
  seconds.innerHTML = "00";
  timeTo.innerHTML = "Time for a break!";
});

//changing start-to-stop, stop-to-start
function buttonOnChange(){
    if(startButton.innerHTML.includes('START')){
        startButton.innerHTML = "STOP";
    }else{
        startButton.innerHTML = "START";
    }
}

//countdown for the clock
function countDown(){
   
}

//pomodoro bittiginda otomatikman break e geciyor, break bittiginde ise otomatiman geri donuyor
//otomatik olarak long break e gitmiyor ama long break otomatikman pomodoroa ya geri donuyor.s

//minutes and seconds 

startButton.addEventListener('click', () =>{

    buttonOnChange();
    //burada short break e gitmesi icin bi komut yazabiliriz.
})

