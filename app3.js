/*************************************************
 *** stopwatch
 */

const domStrings = {
    timer: '.timer',
    start: '.start',
    reset: '.reset',
    lap: '.lap',
    newLap: '.new_lap'
}

let time = 0;
const i = 0;
let lap = "00:00:00:00";
let isRunning = false;
let interval;

const timer = document.querySelector(domStrings.timer);
const start = document.querySelector(domStrings.start);
const reset = document.querySelector(domStrings.reset);
const btnLap = document.querySelector(domStrings.lap);
const laps = document.querySelector(domStrings.newLap);
start.addEventListener('click', (e) => {
    isRunning ? timerStop() : timerStart();
});

const timerStart = () => {
    isRunning = true;
    start.innerHTML = 'stop';
    start.style.setProperty('background-color', '#e74739');
    start.style.setProperty('color', '#b6eaeb');
    startTime();
}

const timerStop = () => {
    isRunning = false;
    start.innerHTML = 'start';
    start.style.setProperty('background-color', '#062A2B');
    start.style.setProperty('color', '#e74739');
    start.style.setProperty('border', '1px dotted #37e61c');
    createLap(timer.innerHTML);
    interval = clearInterval(interval);
}


const startTime = () => {
    let updateCounter = () => {
        time++;
        let t = time / 10;
        let mili = time % 10;
        let sec = Math.floor(t % 60);
        let min = Math.floor(t / 60);
        let hours = Math.floor(t / 3600);

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = `0${min}`;
        }
        if (mili < 10) {
            mili = `${mili}0`;

        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
        lap = `${hours}:${min}:${sec}:${mili}`;

        timer.innerHTML = lap;
    }
    updateCounter();
    interval = setInterval(updateCounter, 100);
};

const createLap = (el) => {
    let li = document.createElement('li');
    li.textContent = el;
    laps.appendChild(li);
};

reset.addEventListener('click', () => {
    start.innerHTML = 'start';
    start.style.setProperty('background-color', '#062A2B');
    start.style.setProperty('color', '#e74739');
    start.style.setProperty('border', '1px dotted #37e61c');
    reset.style.setProperty('background-color', '#062A2B');
    reset.style.setProperty('color', '#e74739');
    reset.style.setProperty('border', '1px dotted #37e61c');
    lap = "00:00:00:00";
    time = 0;
    document.querySelector(domStrings.timer).innerHTML = lap;
    isRunning = false;
    location.reload();
    interval = clearInterval(interval);
});

btnLap.addEventListener('click', () => {
    createLap(timer.innerHTML);
})