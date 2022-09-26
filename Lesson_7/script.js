// const arr = [3, 10];

// /**
//  * Test callback
//  * @param {*} arr array with same value
//  * @param {*} callback function add and logger
//  */
// function foo(arr, callback) {
//     const first = arr[0];
//     const second = arr[1];
//     const result = callback(first, second);
//     console.log(callback);
//     console.log(result);
// }


// foo(arr, add)
// foo(arr, logger)


// function add(a, b) {
//     return a + b
// }

// function logger(a,b){
//     alert(`Функція логгер ${a}`)
//     alert(`Функція логгер ${b}`)
// }



// Example 1 - Коллбек функції
// Напишіть такі функції:

// createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор як id і викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
// logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль

// let i = 0

// function createProduct(partialProduct, callback) {
//     i += 1
//     const obj = {
//         id: i,
//         ...partialProduct
//     }
//     callback(obj)
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice({price, quantity}) {
//     console.log(price * quantity);
//     return price * quantity

// }
// createProduct({name: '🍋',price: 20,quantity: 5}, logTotalPrice);
// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);








// Example 2 - Коллбек функції
// Додайте об'єкту account  методи ззаписом
// withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) де перший параметр це сума операції, а другий і третій - колбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
// Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMIT або меньше або дорівнює нулю, та onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError('Мало коштів')
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищенно ліміт')
//         } else {
//             this.balance -= amount
//             onSuccess(`Списано ${amount}, залишок ${this.balance} `)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount <= 0) {
//             onError('Значення має бути більше нуля');
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищенно ліміт');
//         } else {
//             this.balance += amount
//             onSuccess(`Кошти успішно додані ${this.balance}`)
//         }

//     }
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(6000, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);




// ПЕРЕРВА ДО 20:55






// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.

// function each(array, callback) {
//     for (const element of array) {
//         console.log(callback(element));
//     }
// }


// each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
// })

// console.log(
// each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
// })
// );
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return Math.sqrt(value);
//     })
// // );
// console.log(
// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
// })
// );
// console.log(
// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
// })
// );





// foo()
// function foo(value) {
//     return value * 2;
// }

// const boo = function (value) {
//     return value * 2;
// }
// boo()


// const boo = ({name}) => {

// }

// boo({name : 'User'})


// const boo = value => value * 12;
// boo(4)


// const boo = (...args) => {
//     console.log(args);
//     // value * 12
// };
// boo(4, 1, 2, 3, 6)








// const createProduct = (partialProduct, callback) => partialProduct = {id: Date.now(),...partialProduct};




// const createProduct = (partialProduct, callback) => {
//     return {
//         id: Date.now(),
//         ...partialProduct
//     }
// };















// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }


// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }


// const logProduct = product => console.log(product);


// const logTotalPrice = product => console.log(product.price * product.quantity);


// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);

// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);








// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

// // console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10));
// console.log(
//     each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     }),
// );





// Example 6 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const logItems = items =>  items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`))
// console.log(items);
// items.forEach((item, idx, arr) => console.log(`${idx + 1} - ${item}`))
// for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
// }


// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);








// Example 7 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // for (let i = 0; i < nameList.length , i < phoneList.length; i+=1) {
//     //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }
//     nameList.forEach((el, idx)=>{
//         console.log(`${el} - ${phoneList[idx]}`);
//     })
//   } 

//   printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem',
//     phones: '89001234567,89001112233,890055566377',
//   });




// Example 8 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const calсulateAverage = (...args) => {

//     let total = 0;
//     // for (let i = 0; i < args.length; i++) {
//     //   total += args[i];
//     // }
//     console.log(args);
//     args.forEach(el => total += el)
//     return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]



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
//         }
//         this.potions.push(newPotion)
//         return this.potions
//     },
//     removePotion(potionName) {
//         // const potionIndex = this.potions.indexOf(potionName);

//         // if (potionIndex === -1) {
//         //     return `Potion ${potionName} is not in inventory!`;
//         // }

//         // this.potions.splice(potionIndex, 1);
//         // for (let i = 0; i < this.potions.length; i += 1) {
//         //     if (this.potions[i].name === potionName) {
//         //         this.potions.splice(i, 1);
//         //         return;
//         //     }
//         // }
//         // return `Potion ${potionName} is not in inventory!`
//         this.potions.forEach((el, idx) => {
//             if (el.name === potionName) {
//                 this.potions.splice(idx, 1)
//                 return;
//             }
//         })
//     },
//     updatePotionName(oldName, newName) {
//         // const potionIndex = this.potions.indexOf(oldName);

//         // if (potionIndex === -1) {
//         //     return `Potion ${oldName} is not in inventory!`;
//         // }

//         // this.potions.splice(potionIndex, 1, newName);
//         // for (const el of this.potions) {
//         //     if (el.name === oldName) {
//         //         el.name = newName
//         //         return;
//         //     }
//         }

//         // this.potions.forEach((el) => {
//         //     if (el.name === oldName) {
//         //         el.name = newName
//         //         return;
//         //     }
//         // })

//     },
//     // Change code above this line
// // };
// // console.log(
// //     atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({
// //     name: "Invisibility",
// //     price: 620
// // }));
// // console.log(atTheOldToad.addPotion({
// //     name: "Power potion",
// //     price: 270
// // }));
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")


const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 5);
console.log(filteredNumbers); // [4, 5]








const decrButton = document.querySelector(`[data-action='decrement']`);
const incrButton = document.querySelector(`[data-action='increment']`);
const value = document.querySelector("#value");
let counterValue = 0;



decrButton.addEventListener("click", onClickDecrement);

function onClickDecrement() {
    counterValue -= 1
    value.textContent = counterValue;
}

incrButton.addEventListener("click", onClickIncrement);

function onClickIncrement() {
    counterValue += 1
    value.textContent = counterValue;
}