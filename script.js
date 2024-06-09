const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const startDate = new Date('23 Jul 2014 11:00:00');

function countdown() {
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();
    let hours = currentDate.getHours() - startDate.getHours();
    let mins = currentDate.getMinutes() - startDate.getMinutes();
    let seconds = currentDate.getSeconds() - startDate.getSeconds();

    // Adjust for overflow
    if (seconds < 0) {
        seconds += 60;
        mins--;
    }

    if (mins < 0) {
        mins += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        // Days in the previous month
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += prevMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

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

// Initial call 
countdown();

// Update every second
setInterval(countdown, 1000);
