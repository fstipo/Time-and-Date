/*************************************************
 *** countdown timer
 */

const domStrings = {
    h: '.hours',
    m: '.minutes',
    s: '.seconds',
    today: '.today',
    endDate: '#end_date',
    cd: '.cnt_days',
    ch: '.cnt_hours',
    cm: '.cnt_minutes',
    cs: '.cnt_seconds',
    dateSelected: '.output_date'
};
let timeInterval;
let timeStop = true;
let savedValue = localStorage.getItem("countdown");
console.log(savedValue)
// if (savedValue) {
//     let temp = localStorage.getItem('countdown');
//     // startClock(temp);//localStorage
//     console.log('zašto ne radiš?')
// };

// change date


const changeDate = document.querySelector(domStrings.endDate);
changeDate.addEventListener('change', (e) => {
    e.preventDefault();
    clearInterval(timeInterval);
    let temp = new Date(e.target.value);
    console.log(temp);
    localStorage.setItem('countdown', temp);
    changeDate.value = e.target.value;
    timeStop = false;
    startClock(temp);
});



// function format date
const formatDate = (d) => {
    const year = d.getFullYear();
    const monthIndex = d.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = months[monthIndex];
    const dayIndex = d.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[dayIndex];
    const date = d.getDate();
    return (`${day}, ${date} ${month} ${year}`)
};

const startClock = (d) => {
    let updateCounter = () => {
        let tl = timeLeft(d);
        if (tl.total <= 0) {
            timeStop = false;
        };

        document.querySelector(domStrings.cd).innerHTML = tl.days;
        document.querySelector(domStrings.ch).innerHTML = tl.hours;
        document.querySelector(domStrings.cm).innerHTML = tl.minutes;
        document.querySelector(domStrings.cs).innerHTML = tl.seconds;
    }
    updateCounter();
    if (!timeStop) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        clearInterval(timeInterval);
    }
}

const timeLeft = (d) => {
    endDate = formatDate(d);
    const now = new Date();
    const today = formatDate(now);
    document.querySelector(domStrings.today).innerHTML = today;
    document.querySelector(domStrings.dateSelected).innerHTML = endDate;
    totalTime = Date.parse(endDate) - Date.parse(now);
    let seconds = Math.floor((totalTime / 1000) % 60);
    let minutes = Math.floor((totalTime / 1000 / 60) % 60);
    let hours = Math.floor(totalTime / (1000 * 60 * 60) % 24);
    let days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    return {
        'total': seconds,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}