//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


//       obj
// function calcBMI({
//     height,
//     weight
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1)); // Math.pow(numericHeight,2 )
// }
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75',
// }));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));





//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({
//     names,
//     phones
// }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // console.log(nameList[0]); //1 2 3
//     // console.log(phoneList[0]); //1 2 3
//     for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem,Anna',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// });


// const smiles = ['😂', '😁', '😒'];
// for (let i = 0, num = 1; i < smiles.length; i += 1, num += 1) {
//     console.log(`порядковий номер ${num} - ${smiles[i]}`);
// }





//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.



// https://uk.wikipedia.org/wiki/JSDoc

// /**
//  * Get object with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
//  */
// function getBotReport({ bots : {repairBots, defenceBots}, companyName}) {
//     console.log('companyName', companyName);
//     // console.log('bots',bots);
//     console.log('repairBots',repairBots);
//     console.log('defenceBots',defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50,
//     }
// }));


// ПЕРЕРВА ДО 20.55


// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

/**
 * Get object with value and return info about stock
 * @param {Object} object
 * @returns {String} Info about stock in company
 */
// function getStockReport({companyName, stock}) {
//     const values = Object.values(stock)
//     let total = 0;
//     for(const value of values){
//         total +=value
//     }
//     return `${companyName} has ${total} items in stock`;
//   }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"




// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.


// function createContact(partialContact) {
//     return {
//         id : generateId(),
//         list: 'default',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }






// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({firstName,lastName, ...info}) {

//     return {
//         fullName: `${firstName} ${lastName}`, //firstName + ' ' + lastName
//         ...info,
//     }
// }
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );


// const arr = [1,2,3,4];
// // const min = Math.min(...arr)


// // const arr2 = [...arr]


// const [firstValue, secondValue, ...args] = arr;
// console.log('firstValue',firstValue);
// console.log("secondValue", secondValue);
// console.log('args',args);


























// /**
//  * Find stone with current name and return total price quantity * price
//  * @param {Array} stones 
//  * @param {String} stoneName 
//  * @returns {Number} Sum
//  */
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
//     return null
// }










// function createContact(arr) {
// for (let i = 0; i < arr.length; i += 1){
//     arr[i] = {
//         id: generateId(),
//         list: 'default',
//         ...arr[i]
//     }
// }
//     for (let obj of arr) {
//         obj.id = generateId();
//         if('list' in obj ){

//         }
//         if (!obj.hasOwnProperty('list')) {
//             obj.list = 'default';
//         }
//         // obj = {
//         //     id: generateId(),
//         //     list: 'default',
//         //     ...obj
//         // }
//     }
//     console.log(arr);
// }

// console.log(
//     createContact([{
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }, {
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }]),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr, ...arr2]
// console.log(arr3);

const user = {
    name: 'Poly',
    email: 'poly@hotmail.com',
}
delete user
console.log(user);



// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };
//   // Change code above this line
// }
