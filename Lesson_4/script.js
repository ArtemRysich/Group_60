// Приклади з областями видимості


// ------------------------------//
// let a = 10

// if (true) {

//     const a = 5;
// }

// console.log('in global', a);




// ------------------------------//
// const a = 10;

// if(true){
//     let a = 5;
//     a = 15;
//     console.log('in local',a);
// }
// console.log('in global',a);

// ------------------------------//
// let a = 10;

// if (true) {
//     // let a = 100;
//     a = 1
//     if (true) {
//         // let a = 25;
//         a = 15;
//         console.log('local 2', a);
//     }
//     console.log('local', a);
// }
// console.log('global', a);


// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {

//     total += number;
//     console.log(total);

// }
// console.log(total);


// ПЕРЕРВА ДО 20.45




// Створення та види функцій

// function expression
// викликається тільки після оголошення
// const world = 'world';
// const hello = 'Hello';
// // foo(world, hello); буде помилка!!!
// const foo = function (hello, world) {
//     console.log(hello, world);
// };
// // foo(world, hello);
// boo(hello, world);



// function declaretion

// function boo(hello, world) {
//     console.log(hello, world);
// }





/// arguments
//  Порахувати суму всіх чисел
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments
// function getSum() {
//     // console.log(arguments);
//     // for(const argument of arguments){
//     //     console.log(argument);
//     // }
//     // const arr = Array.from(arguments);
//     // const arr2 = [...arguments];
//     // console.log(arr2);
//     let total = 0
//     for(let i = 0; i < arguments.length; i+=1){
//         // console.log(arguments[i]);
//         total+=arguments[i]
//     }
//     return total
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(getSum(44, 5, 14, 3));


// Стек викликів

// function foo() {
//     console.log('start foo');
//     console.log('end foo');
// }


// function boo(){
//     console.log('start boo');
//     foo()
//     console.log('end boo');
// }
// boo()










// Напишіть функції для роботи з колекцією навчальних курсів courses:
// 1 addCourse(name) - додає курс в кінець колекції
// 2 removeCourse(name) - видаляє курс з колекції
// 3 updateCourse(oldName, newName) - замінює назву на нову
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourse(name) {
//     if (!courses.includes(name)) {
//         courses.push(name)
//         return;
//         console.log('Hello world');
//     }
//     return 'Ви вже маєте данний курс';
// }


// const res = addCourse('Express');
// console.log(res);
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// const result = addCourse('CSS'); // 'Ви вже маєте данний курс'
// console.log('result', result);

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// function removeCourse(name){
//     if(courses.includes(name)){
//         const idx = courses.indexOf(name);
//         courses.splice(idx,1);
//         return `Курс ${name} успішно видалено`;
//     }
//     return 'Курс з такою назвою не знайдено';
// }

// console.log(removeCourse('React'));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс з такою назвою не знайдено'


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];

// function updateCourse(oldName, newName) {
//     console.time('foo')
//     if (courses.includes(oldName)) {
//         const idx = courses.indexOf(oldName);
//         // courses.splice(idx, 1, newName);
//         courses[idx] = newName;
//         return `${oldName} замінили на ${newName}`
//     }
//     console.timeEnd('foo')
//     return 'Курс з такою назвою не знайдено'
// }

// console.log(updateCourse('Express', 'NestJS'));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('Angular', 'NestJS')); //'Курс з такою назвою не знайдено'


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];
// var a;
// // // courses[0] = 'React'
// // for(let course of courses){
// // console.log(course);
// // }
// // console.log(courses);

// var a = 10;
// var a = 2;
// var a = 3;
// var a = 4;
// var a = 5;
// console.log(a);

// if (true) {
//     var c = 10;
// }
// console.log(c);

function foo(){
    var c = 10;
};
console.log(c);