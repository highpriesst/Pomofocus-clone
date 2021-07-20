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
    setMode("red", 25, 0, "Time for a work!");
});
shortBreak.addEventListener("click", function () {
    setMode("blue", 5, 0, "Time for a break!");
});
longBreak.addEventListener("click", function () {
    setMode("green", 15, 0, "Time for a break!");
});
function setMode(color, minuteCount, secondCount, message) {
    if (minuteCount === void 0) { minuteCount = 0; }
    if (secondCount === void 0) { secondCount = 0; }
    if (message === void 0) { message = ""; }
    body.classList.remove("bg-blue-500");
    body.classList.remove("bg-red-500");
    body.classList.remove("bg-green-500");
    body.classList.add("bg-" + color + "-500");
    minute.innerHTML = ConvertToString(minuteCount);
    seconds.innerHTML = ConvertToString(secondCount);
    timeTo.innerHTML = message;
}
//changing start-to-stop, stop-to-start
function buttonOnChange() {
    if (startButton.innerHTML == 'START') {
        startButton.innerHTML = "STOP";
    }
    else {
        startButton.innerHTML = "START";
    }
}
//countdown for the clock
function countDown() {
}
/* INFO pomodoro bittiginda otomatikman break e geciyor,
break bittiginde ise otomatiman geri donuyor
otomatik olarak long break e gitmiyor ama long break
otomatikman pomodoroa ya geri donuyor.
*/
// INFO minutes and seconds
startButton.addEventListener('click', function () {
    buttonOnChange();
    // TODO Burada short break e gitmesi icin bi komut yazabiliriz.
});
function ConvertToString(value) {
    return value.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}
/* TASKS
[x] Pomodoro modunu degistirme islemi
[ ] Pomodoro sayacini baslatmak icin kod ekle
[ ] Pomodoro duraklatma
[ ] Pomodoro session'i ni atlama
[ ] Rapor ekrani ve raporlarin hazirlanmasi
[ ] Task ekleme ve task'i guncelleyerek tamamlanmis konumuna gecirme
*/
