// 'use strict'

// function foo(){
//     console.log(this);
// }
// foo()



// const boo = function(){
//     console.log(this);
// }

// const obj ={
//     logCtx : foo
// }

// // console.log(obj.logCtx);
// obj.logCtx()

// const objA = {
//     name: 'objA',
//     logCtx: function () {
//         console.log(this);
//         return 'Hello from objA'
//     }
// }
// // objA.logCtx()


// const objB = {
//     name: 'objB',
//     foo: objA.logCtx
// }

// console.log(objB.foo);
// objB.foo()



// const foo = () => {console.log(this);}
// foo()


// const obj = {
//     objThis: this,
//     foo: () => {
//         console.log(this);
//     }
// }

// // console.log(obj.objThis);
// obj.foo();


// const foo = () => {
//     console.log(this);
// }

// const obj ={
//     key: foo
// }
// obj.key()


function foo(a, b) {
    // console.log(arguments);
    console.log('this =>', this, 'a=>', a, 'b=>', b);
}
// foo(1,2)
// function boo() {
// console.log(this);
// }

// foo.apply({}, [1, boo]);
// foo.call({}, 1, boo)
const testObj = {
    name: 'my Test'
}
// const boo = foo.bind(testObj, 0);
// boo(3, 4)
// boo(4, 5)
// boo(5, 6)

// var artem = {
//     name: 'Artem',
//     sayHello() {
//         console.log(this.name);
//     }
// }
// const david = {
//     name: 'David',
//     // sayHello: artem.sayHello
// }
// const maks = {
//     name: 'Maks',
// }

// artem.sayHello.call(david)




// artem.sayHello();
//  const fn = artem.sayHello.bind(david)
// artem.sayHello.apply(maks)

// fn()
// fn()
// fn()


// const obj = {
//     name : 'my name',
//     sayHello(){
//         console.log('sayHello',this.name);

//         // const boo = () => {
//         //     console.log('boo',this);

//         //     // const doo = () => {
//         //     //     console.log('doo', this);
//         //     // }
//         //     // doo()
//         // }
//         function boo(){
//             console.log(this);
//         }
//         boo()
//         // boo.call(this)
//         return boo
//     }

// }
// const boo = obj.sayHello()
// boo()
// obj.sayHello()()



// Перерва 21.01
























// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.
// 'use strict'
// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         //   return  this.stones.reduce((acc, stone) => {
//         //         if (stone.name === stoneName) {
//         //             return stone.price * stone.quantity
//         //         }
//         //         return acc
//         //     }, 0)
//         const {
//             price,
//             quantity
//         } = this.stones.find(item => item.name === stoneName)

//         return price * quantity
//         // return  this.stones.reduce((acc, {name, price,quantity }) => name === stoneName ? acc = price * quantity : acc , 0);
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100 
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// Доробити виклик функції this.generateId щоб після call this не втрачався 
const phonebook = {
    contacts: [],
    add(contact) {
        const createid = () => this.generateId()
        console.log(createid);
        const newContact = {
            list: 'default',
            ...contact,
            id: createid(),
            createdAt: () => phonebook.getDate(),
        };
        this.contacts.push(newContact);
        return this.contacts
    },
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
    getDate() {
        return Date.now();
    },
};

// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// // //   console.log(
// //     phonebook.add({
// //       name: 'Poly',
// //       email: 'poly@hotmail.com',
// //     }),
// //   );

// const newPhoneBook = {
//     name: 'newPhoneBook',
//     contacts: [],
// }
// phonebook.add.call(newPhoneBook, {
//     name: 'Mark',
//     email: 'mango@mail.com',
//     list: 'friends',
// });
// console.log(newPhoneBook);





// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// create(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.


// const calculator = {
//     // a: 0,
//     // b: 0,
//     create(c, d) {
//         this.a = c
//         this.b = d
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };

// console.log('before',calculator);
// calculator.create(5, 2)
// console.log('after',calculator);
// console.log(calculator.add());
// console.log(calculator.mult());


const obj1 = {
    name: 'Nikita',
};
const obj2 = {
    name: 'Max',
};

function printName(obj) {
    console.log(`Hi ${obj.name}`);
    console.log(this);
}

function printName1() {
    console.log(`Hi ${this.name}`);
}
printName(obj1);
printName1.call(obj2);