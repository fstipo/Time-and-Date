/*************************************************
 *** digital clock
 */

const domStrings = {
    h: '.hours',
    m: '.minutes',
    s: '.seconds',
    today: '.today'
};

const time = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.querySelector(domStrings.h).innerHTML = hours;
    document.querySelector(domStrings.m).innerHTML = minutes;
    document.querySelector(domStrings.s).innerHTML = seconds;
};
setInterval(time, 1000);