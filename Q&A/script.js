// class StringBuilder {
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     };

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }
// const test = new StringBuilder('1234')
// console.log(test.getValue());


// if(~idx)
// if(!!~idx)
// console.log(!!0);
// console.log(!!1);
// console.log(Boolean(1));




// let arr = [1, 'c', 2, 3, 'a', 4, 'b', 5, 6];

// arr= arr.filter(item => typeof item === 'number' );

// console.log(arr);


// let i = 0
// while (i < 0) {
//     console.log(i);
//     i += 1
// }

// do {
//     console.log(i);
//     i += 1;
// } while (i < 0)


// let arr = [1, 'c', 2, 3, 'a', 4, 'b', 5, 6];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i += 1
// }



//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     // let total = 0;
//     let days = 0;
//     //     while (total < depth) {
//     //         total += daySpeed;
//     //         days += 1;
//     //         if (total < depth) {
//     //             total -= nightSpeed
//     //         }
//     //     }

//     // console.log(days);
//     // for (let total = 0; total < depth; total += daySpeed) {
//     //     days += 1;
//     //     if (total < depth) {
//     //         total -= nightSpeed
//     //     }
//     // }
//     // console.log(days);
//     // const result = Math.round(depth / (daySpeed - nightSpeed))
//     // console.log(result);

// }
// calcDays(42) //виповзе за 8 днів
// calcDays(17) //виповзе за 3 дні
// calcDays(18) //виповзе за 4 дні

// https://forum.jscourse.com/t/rekursiya-obekta-kak-sdelat-polnuyu-kopiyu-obekta/2751
// https://learn.javascript.ru/recursion


// function foo(start, end) {
//     if (start !== end) {
//         // start += 1
//         console.log(start, end);
//         foo(start, end)
//     }



// }
// foo(1, 10)



// function sum(a, b) {
//     return a + b
// }
// foo(1, 2)


// // const input = prompt('enter name')
// const names = ['Olga','Pavlo','Kate']
// // console.log(names.push('Artem'))
// console.log(names[names.push('Artem') - 1]);
// console.log(names);
// function checkName(name) {
//     if (!name) {
//         alert('Please enter name')
//         checkName(prompt('enter name'));
//         return;
//     }
//     if(names.includes(name)){
//         alert(`Hello ${name}`)
//         return;
//     }
//     alert('Please register')

// }
// checkName(input)
// function foo(a, b) {
//     const sum = a + b;
//     if (sum >= 20) {
//         return 'MAX VALUE';
//     }
//     return sum;

// }


// console.log(foo(2, 10));



// const names = ['Olga', 'Pavlo', 'Kate'];
// // console.log(names[0]);
// for (let i = 0; i < names.length; i += 1){
//     console.log(names[i]);
// }
// const value = prompt();
// console.log(typeof value);

// const user = {
//     name: 'Artem',
//     age: 28,
// }
// const keys = Object.keys(user)
// console.log(keys);
// for (const key of keys) {
//     console.log('Назва ключа ', key, user[key]);
// }

// const apartment = {
//     tags: ['like','hotel']
// }



// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);



// function foo(){
//     let x = 55;
//     function boo(a){
//         return x + a
//     }
//     return boo
// }



// console.log(foo()(12));
// boo()

// https://monsterlessons.com/project/lessons/singleton-pattiern-v-javascript
// let counterModule = (function () {
//     let instance;
//     let counter = 0;

//     let getCounter = function () {
//         return counter;
//     }

//     let increaseCounter = function () {
//         counter+=1;
//     }

//     let createInstance = function () {
//         return {
//             getCounter: getCounter,
//             increaseCounter: increaseCounter
//         }
//     }

//     return {
//         getInstance: function () {
//             return instance || (instance = createInstance());
//         }
//     }
// })();


// const counter = counterModule.getInstance();
// counter.increaseCounter()
// counter.increaseCounter()
// counter.increaseCounter()

// let counter2 = counterModule.getInstance();
// console.log(counter2.getCounter());



// const number = 11111111111111111111111111111111111111111111111111111111111111111111111111111;
// const big = 11111111111111111111111111111111111111111111111111111111111111111111111111111n +1n;

// // console.log(typeof number);
// console.log( Number(big));

// console.log(Number.MAX_SAFE_INTEGER);





// const symbol = Symbol();
// const symbol2 = Symbol();
// const object = Object(symbol)
// console.log(object);
// console.log(symbol2);






// const obj = {
//     name: 'Name',
//     age: 28
// }

// const newObj = {
//     ...obj
// };
// console.log(newObj);

// const foo = (...args) => {

// }


// foo(1, 2, 3, 4)
// class User {
// constructor( name, email ) {
//     this.name = name;
//     this.email = email;
//   }

// }

// const admin = new User('Artem', 'test@gm.com')
// class User {
//     #password
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password
//     }
//     get password() {
//         return this.#password
//     }

//     set password(newPassword) {
//         this.#password = newPassword
//     }
//     checkName() {
//         console.log(this.name);
//     }
// }


// const user = new User('Artem', 123456)
// user.password = 'qwerty'
// console.log(user.password);
// console.log(user);

// const arr = [1,2]
// console.log(arr);
// Object.prototype.customFunction = function(){
//    return 'Hello from prototype'
// }
// console.log(user.customFunction());



// Можна розглянути Завдання 5 з минулого заняття. Я щось робив, але не впевнений що правильно

// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За зомовчуванням значення властивості on має бути false.

// class Toggle {
//     constructor({
//         isOpen = false
//     } = {}) {
//         this.on = isOpen;
//     }

//     toggle() {
//         this.on = this.on ? false : true;
//     }

//     toggle() {
//         this.on = !this.on 
//     }
// }

// const firstToggle = new Toggle({
//     isOpen: true
// });
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);
// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle(true);
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');


// function foo(a, b) {
//     console.log(this, `a => ${a}`, `b => ${b}`);

// }

// foo(1, 2)



// foo.call({
//     name: 'Hello'
// }, 1, 2)


// foo.apply({
//     name: 'Hello'
// },[ 1, 2])




// const copy = foo.bind({name: 'Hello'})
// copy(1,2);
// copy(3,2);
// copy(4,2)


// Чому не працює addPotion ? якщо змінити місцями умови і через === в
// if працює.Не розумію як працювати з !==

// const atTheOldToad = {
//     potions: [{
//             name: "Speed potion",
//             price: 460
//         },
//         {
//             name: "Dragon breath",
//             price: 780
//         },
//         {
//             name: "Stone skin",
//             price: 520
//         },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const i of this.potions) {
//             if (i.name !== newPotion.name) {
//                  this.potions.push(newPotion);
//                  return;
//             }
//         }
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;

//     },
// }
// atTheOldToad.addPotion({
//     name: "Custom potion",
//     price: 460
// })
// console.log(atTheOldToad);



// const atTheOldToad = {
//     potions: [{
//             name: "Speed potion",
//             price: 460
//         },
//         {
//             name: "Dragon breath",
//             price: 780
//         },
//         {
//             name: "Stone skin",
//             price: 520
//         },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;

//             }
//             this.potions.push(newPotion)
//         }

//     },
//     removePotion(potionName) {
//         this.potions.forEach((el, idx) => {
//             if (el.name === potionName) {
//                 this.potions.splice(idx, 1)
//                 return;
//             }
//         })
//     },
//     updatePotionName(oldName, newName) {
//         this.potions.forEach((el) => {
//             if (el.name === oldName) {
//                 el.name = newName
//                 return;
//             }
//         })
//     },
//     // Change code above this line
// };


// setTimeout(()=>{
//     console.log('hello');
// },3000)


let i = 0
const id =setInterval(()=>{
    i +=1
    console.log('Hello world',i);
    if(i === 10){
    clearInterval(id)
    }
},1000)