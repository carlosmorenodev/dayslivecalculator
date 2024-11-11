let input = document.querySelector('#input');
let daysButton = document.querySelector('#daysButton');
let weeksButton = document.querySelector('#weeksButton');
let monthsButton = document.querySelector('#monthsButton');
let hoursButton = document.querySelector('#hoursButton');
let secondsButton = document.querySelector('#secondsButton');
let resetButton = document.querySelector('#resetButton');

let result = document.querySelector('#result');

daysButton.addEventListener('click', () => {
    let daysGone = input.value * 365;
    daysGone += Math.floor(input.value / 4) - Math.floor(input.value / 100) + Math.floor(input.value / 400);
    result.innerHTML = daysGone + " días aproximadamente";
    console.log(totalDays);
});

weeksButton.addEventListener('click', () => {
    let weeksGone = input.value * 52;
    result.innerHTML = weeksGone + " semanas aproximadamente";
});

monthsButton.addEventListener('click', () => {
    let monthsGone = input.value * 12;
    result.innerHTML = monthsGone + " meses aproximadamente";
})

hoursButton.addEventListener('click', () => {
    let hoursGone = input.value * 8760;
    result.innerHTML = hoursGone + " horas aproximadamente";
})

secondsButton.addEventListener('click', () => {
    let secondsGone = input.value * 31536000;
    result.innerHTML = secondsGone + " segundos aproximadamente";
});

resetButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
})
