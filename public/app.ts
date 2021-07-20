//variables for dom manipulation
let body = document.body!;
let pomodoro = document.getElementById("pomodoro")!;
let shortBreak = document.getElementById("shortBreak")!;
let longBreak = document.getElementById("longBreak")!;
let minute = document.getElementById('minute')!;
let seconds = document.getElementById('seconds')!;
let timeTo = document.getElementById("time-to")!;
let startButton = document.getElementById("startButton")!;

let startCountDown;

//Logic for 3 menu buttons above timer.
pomodoro.addEventListener("click", () => {
  setMode("red", 25, 0, "Time for a work!");
});

shortBreak.addEventListener("click", () => {
  setMode("blue", 5, 0, "Time for a break!");
});

longBreak.addEventListener("click", () => {
  setMode("green", 15, 0, "Time for a break!");
});

function setMode(color: string, minute: number = 0, second: number = 0, message: string = ""): void {
  body.classList.remove("bg-blue-600");
  body.classList.remove("bg-red-500");
  body.classList.remove("bg-green-500");

  body.classList.add("bg-" + color + "-500");

  minute.innerHTML = minute.toString();
  seconds.innerHTML = second.toString();
  timeTo.innerHTML = message;
}

//changing start-to-stop, stop-to-start
function buttonOnChange():void{
    if(startButton.innerHTML.includes('START')){
        startButton.innerHTML = "STOP";
    }else{
        startButton.innerHTML = "START";
    }
}

//countdown for the clock
function countDown():void{
}

/* INFO pomodoro bittiginda otomatikman break e geciyor,
break bittiginde ise otomatiman geri donuyor
otomatik olarak long break e gitmiyor ama long break
otomatikman pomodoroa ya geri donuyor.
*/

// INFO minutes and seconds

startButton.addEventListener('click', () =>{

    buttonOnChange();
    // TODO Burada short break e gitmesi icin bi komut yazabiliriz.
})

/* TASKS
[x] Pomodoro modunu degistirme islemi
[ ] Pomodoro sayacini baslatmak icin kod ekle
[ ] Pomodoro duraklatma
[ ] Pomodoro session'i ni atlama
[ ] Rapor ekrani ve raporlarin hazirlanmasi
[ ] Task ekleme ve task'i guncelleyerek tamamlanmis konumuna gecirme
*/
