let minutes = 0;
let seconds = 0;
let tens = 0;


let getMinutes = document.getElementById("minutes");
let getSeconds = document.getElementById("seconds");
let getTens = document.getElementById("tens");
let buttonPlay = document.getElementById("play");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");

let interval;

buttonPlay.onclick = () => {

    interval = setInterval(startTimer, 10);

}

function startTimer() {
    tens++;

    if (tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        getTens.innerHTML = + tens;
    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        getMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        getSeconds.innerHTML = "0" + seconds;
    }

    if (minutes > 9) {

        getMinutes.innerHTML = minutes;

    }

    if (minutes > 59) {

        clearInterval(interval);

    }

}


buttonStop.onclick = () => {
    clearInterval(interval);
}

buttonReset.onclick = () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    tens = 0;

    getTens.innerHTML = "0" + tens;
    getSeconds.innerHTML = "0" + seconds;
    getMinutes.innerHTML = "0" + minutes;
}
