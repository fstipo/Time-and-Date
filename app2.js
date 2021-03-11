/*************************************************
 *** countdown timer
 */

const domStrings = {
    h: '.hours',
    m: '.minutes',
    s: '.seconds',
    today: '.today',
    endDate: '#end_date',
    cd: 'cnt_days',
    ch: 'cnt_hours',
    cm: 'cnt_minutes',
    cs: 'cnt_seconds',
    dateSelected: '.output_date'
};


// change date

const changeDate = document.querySelector(domStrings.endDate);
changeDate.addEventListener('change', (e) => {
    temp = changeDate.value
    temp = new Date(temp);
    console.log(temp);
    startClock(temp);
});


// funcion format date
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
}





startClock = (d) => {
    timeLeft(d);
}

timeLeft = (d) => {
    endDate = formatDate(d);
    const now = new Date();
    const today = formatDate(now);
    console.log(today)
    document.querySelector(domStrings.today).innerHTML = today;
    console.log(Date.parse(now));
    document.querySelector(domStrings.dateSelected).innerHTML = endDate;
    console.log(Date.parse(endDate));
}

// // formatSelectDate = formatDate(selectedDate);
// document.querySelector(domStrings.dateSelected).innerHTML = formatSelectDate;
// console.log(selectedDate);
// return selectedDate;




// document.querySelector(domStrings.dateSelected).innerHTML = endDay;



// const timeLeft = (endDate, now) => {
//     return Date.parse(endDate) - Date.parse(now);
// };