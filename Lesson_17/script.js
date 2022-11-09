// https://www.jscamp.app/ru/docs/javascript25/
// https://habr.com/ru/company/vk/blog/438286/
// https://262.ecma-international.org/6.0/#sec-daylight-saving-time-adjustment



// console.log('start');
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0)


// for (let i = 0; i < 99999; i += 1) {
//     console.log('for', i);
// }
// console.log('end');
// const user = {
//     name: 'User',
//     age: 22
// }

// console.log('start');
// setTimeout(()=>{
//     console.log('setTimeout   1');
// },3000)

// setTimeout(()=>{
//     console.log('end');
// },3000)


// let acc = 1

// function foo() {
//     if (acc >5) {
//         clearInterval(idInt)
//         return
//     }
//     console.log('hello world');
//     acc += 1
//     console.log(acc);

// }
// console.log('after');
// const idInt = setInterval(foo, 300, 'arg1', user, 3)



// const idInt1 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt2 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt3 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt4 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt5 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt6 = setInterval(foo, 500, 'arg1', user, 3)
// const idInt7 = setInterval(foo, 500, 'arg1', user, 3)

// const idTim = setTimeout(() => {

// }, 300)

// console.log('idInt', idInt, idInt1, idInt2, idInt3, idInt4);
// console.log('idTim', idTim);


// ПЕРЕРВА до 21.00







const refs = {
    dateDay: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    dateMonth: document.querySelector('.date-month'),
    dateYear: document.querySelector('.date-year'),
    clock: document.querySelector('.digital-clock'),
    seconds: document.querySelector('.clock-seconds__arrow'),
    minutes: document.querySelector('.clock-minutes__arrow'),
    hours: document.querySelector('.clock-hours__arrow'),
}

const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];


setInterval(() => {
    const currentTime = new Date();
    const day = namesOfDay[currentTime.getDay()];
    const dayOfMonth = currentTime.getDate().toString().padStart(2, '0')
    const year = currentTime.getFullYear()
    const month = namesOfMonth[currentTime.getMonth()]

    refs.dateDay.textContent = day;
    refs.date.textContent = dayOfMonth
    refs.dateMonth.textContent = month;
    refs.dateYear.textContent = year;

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');


    refs.clock.textContent = `Поточний час: ${hours} : ${minutes} : ${seconds}`

    console.log(refs.seconds);


    // seconds 360/60=6
    // minutes 360/60=6
    // hours   360/12=30
    const forSeconds = seconds * 6;
    const forMinutes = minutes * 6;
    const forHours = hours * 30 + minutes * 0.5;//(30/60) = 0.5

    refs.seconds.style.transform = `rotate(${forSeconds}deg)`;
    refs.minutes.style.transform = `rotate(${forMinutes}deg)`;
    refs.hours.style.transform = `rotate(${forHours}deg)`
}, 1000)