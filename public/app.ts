//variables for dom manipulation
let body = document.body!;
let pomodoro = document.getElementById("pomodoro")!;
let shortBreak = document.getElementById("shortBreak")!;
let longBreak = document.getElementById("longBreak")!;
let minute = document.querySelector('#minute')!; 
let seconds = document.querySelector('#seconds')!; 
let timeTo = document.getElementById("time-to")!;
let startButton = document.querySelector("#startButton")!;

let timer = document.querySelector('#timer')!;
let counter = 0;
let timeleft = 1500;

//audio variables
let startSound = new Audio('startSound.mp3');
let stopsound  = new Audio('stopSound.mp3');
let switchSound = new Audio('switchSound.mp3');
let finished = new Audio('finished.mp3');


//update for html before timer

//bu fonksiyon inner html i editliyor ve geri donuyor.
function convertToSeconds(s:number):string{
  let min = ConvertToString(Math.floor(s / 60));
  let sec = ConvertToString(s % 60);

  return timer.innerHTML = `${min}:${sec}`;
}

let currentTimer = convertToSeconds(timeleft - counter);

function timeIt(){
  counter++;
  currentTimer = convertToSeconds(timeleft - counter);
  if(counter == timeleft){
    finished.play();
  }
  //console.log(currentTimer);
}

//Logic for 3 menu buttons above timer.
pomodoro.addEventListener("click", () => {
  setMode("red", 25, 0, "Time to work!");
  timeleft = 1500;
  switchSound.play();
});

shortBreak.addEventListener("click", () => {
  setMode("blue", 5, 0, "Time for a break!");
  timeleft = 300;
  switchSound.play();
});

longBreak.addEventListener("click", () => {
  setMode("green", 15, 0, "Time for a break!");
  timeleft = 900;
  switchSound.play();
});

function setMode(color: string, minuteCount: number = 0, secondCount: number = 0, message: string = ""): void {
  body.classList.remove("bg-blue-500");
  body.classList.remove("bg-red-500");
  body.classList.remove("bg-green-500");

  body.classList.add("bg-" + color + "-500");

  timeTo.innerHTML = message;
}

//changing start-to-stop, stop-to-start
//works fine!
function buttonOnChange():void{
    if(startButton.innerHTML == 'START'){
        startSound.play();
        startButton.innerHTML = "STOP";
    }else{
        startButton.innerHTML = "START";
        stopsound.play();
    }
}

/* INFO pomodoro bittiginda otomatikman break e geciyor,
break bittiginde ise otomatiman geri donuyor
otomatik olarak long break e gitmiyor ama long break
otomatikman pomodoroa ya geri donuyor.
*/
// INFO minutes and seconds
startButton.addEventListener('click', () =>{
  setInterval(timeIt,1000);
  buttonOnChange();
  // TODO Burada short break e gitmesi icin bi komut yazabiliriz.
})

function ConvertToString(value: number): string{
  return value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}

/* TASKS
[x] Pomodoro modunu degistirme islemi
[x] Pomodoro sayacini baslatmak icin kod ekle
[x] Ses Eklentileri
[ ] Pomodoro duraklatma
[ ] Pomodoro session'i ni atlama
[ ] Rapor ekrani ve raporlarin hazirlanmasi
[ ] Task ekleme ve task'i guncelleyerek tamamlanmis konumuna gecirme */