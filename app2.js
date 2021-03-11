/*************************************************
 *** countdown timer
 */

const domStrings = {
    h: '.hours',
    m: '.minutes',
    s: '.seconds',
    today: '.today'
};

const date = new Date();
console.log(date);



const formatDate = (d) => {
    const year = d.getFullYear();
    console.log('hello');
    console.log(year);
    const monthIndex = d.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = months[monthIndex];
    const dayIndex = d.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[dayIndex];
    const date = d.getDate();
    return (`${day}, ${date} ${month} ${year}`)
}

today = formatDate(date);

// console.log(d);
// console.log(year);

// date format



// function dateFormat(d) {
//     console.log('bit će dobro');

//     year = d.getFullYear();
// const monthIndex = d.getMonth();
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// month = months[monthIndex];
// const dayIndex = d.getDay();
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const day = days[dayIndex];
// const date = d.getDate();
// return date = `${day}, ${date} ${month} ${year}`;
// };





// const d = new Date();


document.querySelector(domStrings.today).innerHTML = today;



const endDate = document.querySelector('input[name="endDate"]');
endDate.addEventListener('change', (e) => {
    eDate = (endDate.value);
    console.log(eDate);
    eDate = new Date(eDate);
    fDate = formatDate(eDate);
    document.querySelector('.end_date').innerHTML = fDate;
    console.log(fDate);
});

// console.log(endDate);
// console.log(endDate.value);



// const time = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     document.querySelector(domStrings.h).innerHTML = hours;
//     document.querySelector(domStrings.m).innerHTML = minutes;
//     document.querySelector(domStrings.s).innerHTML = seconds;
// };
// setInterval(time, 1000);




// 
// // document.querySelector()