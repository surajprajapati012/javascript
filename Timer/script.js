let seconds = 0;
let minutes = 0;
let hours = 0;
let count = 0;


let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');


function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    hour.innerHTML = h;
    second.innerHTML = s;
    minute.innerHTML = m;
}

start.addEventListener('click', () => {
    if (count !== null) {
        clearInterval(count);
    }
    count = setInterval(stopwatch, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(count);

});

reset.addEventListener('click', () => {
    clearInterval(count);
    seconds = 0;
    minutes = 0;
    hours = 0;
    hour.innerHTML = '00';
    second.innerHTML = '00';
    minute.innerHTML = '00';
});