const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const startDate = new Date('23 Jul 2014 11:00:00');

function countdown() {
    const currentDate = new Date();
    let diff = currentDate - startDate;

    const years = currentDate.getFullYear() - startDate.getFullYear();
    startDate.setFullYear(currentDate.getFullYear());

    if (currentDate < startDate) {
        startDate.setFullYear(currentDate.getFullYear() - 1);
    }

    const months = currentDate.getMonth() - startDate.getMonth();
    if (months < 0) {
        months += 12;
    }

    startDate.setMonth(currentDate.getMonth());
    if (currentDate < startDate) {
        startDate.setMonth(currentDate.getMonth() - 1);
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    yearsEl.innerHTML = years;
    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(years, months, days, hours, mins, seconds);
} 

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
