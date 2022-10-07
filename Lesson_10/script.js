// const obj = {
//     name: "user"
// }
// console.log(obj);

// const arr = [1,2,3,4]
// console.log(arr);


// Array.prototype.sayHello = function(name){
//     console.log(`Hello my name ${name}`);
// }


// const str = '12324345';

// // str.sayHello('Artem')
// const arr = [1,2]
// [1,2].sayHello('Vlad')
// console.log([1,2]);




// const arr = [1,2,3];

// arr.forEach(val => console.log(val))
// console.log(arr);


// const objA = {
//     name: "user",
//     sayHello() {
//         return 'Hello'
//     }
// }



// const objB = Object.create(objA);
// objB.age = 11
// // console.log(user);
// // console.log(user.sayHello());

// const objC = Object.create(objB);
// objC.sayHello = function(){
//     return "Hello from ADMIN!!!!!!!"
// }







// const obj = {
//     name: 'default',
//     email: 'test@gm.com',

//     getEmail() {
//         console.log(this.email);
//     },

//     setEmail(newEmail) {
//         this.email = newEmail;
//     }
// }


// const objA = Object.create(obj);
// objA.name = 'User';
// objA.email = "user@gm.com"


class User {
    static role = {
        admin: "Admin",
        user: "User"
    };
    static total = 0;

    static counter() {
        User.total +=1
    };


    #password
    constructor(val1, val2, val3, val4) {
        this.name = val1;
        this.email = val2;
        this.#password = val3;
        this.role = val4;
        User.counter()
    }

    get mail() {
        console.log(this.email);
    }

    set mail(newEmail) {
        if (this.email !== newEmail) {
            this.email = newEmail;
        }
    }
    get password() {
        console.log(this.#password);
    }
    set password(newPassword) {
        this.#checkPassword(newPassword)
    }

    #checkPassword(newPassword) {
        if (newPassword.length > 5) {
            this.#password = newPassword;
        } else {
            console.log('Потрібно більше символів');
        }
    }
}

// constructor(val1, val2, val3, val4) {
//     this.name = val1;
//     this.email = val2;
//     this.#password = val3;
//     this.role = val4;
//     User.counter()
// }
// class Admin extends User {
//     constructor(name,email,password,role, icon){
//         super(name,email,password,role  )
//         this.icon = icon;
//     }
// }


// const objA = new User("User", 'user@gmail.com', "12345", User.role.user);
// console.log(objA);
// const objB = new Admin("Admin", 'admin@gmail.com', "12345", User.role.admin,'cool icon');
// console.log(objB);


// const objC = new User("Gamer", 'gamer@gmail.com', "12345", User.role.user);
// const objD = new User("Gamer", 'gamer@gmail.com', "12345", User.role.user);
// objB.password = '123456'

// console.log(objA);
// console.log(objB);
// console.log(objC);
// console.log(User.total);













// objA.mail = 'coolUser@gmail.com'
// objA.mail
// objA.setEmail("test@gmail.com")
// objA.getEmail()
// console.log(objA);




// class Animal{
//     constructor(name, sound){
//         this.name = name;
//         this.sound = sound
//     }

//     speak(){
//         console.log(this.sound);
//     }
// }































// Example 1 - Блоггер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік} years old and has ${у постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//     constructor({name,age,numberOfPosts,topics}){
//       this.name = name;
//       this.age= age;
//       this.numberOfPosts = numberOfPosts;
//       this.topics = topics;
//     }

//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }


// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });

//   console.log(mango);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
//   mango.updatePostCount(5);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

//   const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });
//   console.log(poly);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
//   poly.updatePostCount(4);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts





// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(arr){
//         this.items = arr
//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(item){
//         this.items.push(item)
//     }
//     // removeItem(item){
//     //     if(this.items.includes(item)){
//     //         const idx = this.items.indexOf(item);
//     //         this.items.splice(idx,1)
//     //     }
//     // }
//     removeItem(item){
//         const idx = this.items.indexOf(item);
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//         // -(-1+1) = -0
//         // -(0+1) = -1
//         // if(idx !== '')
//         // Boolean(~idx)
//         // !!~idx
//         console.log(!!~idx);
//         if(!!~idx){
//             this.items.splice(idx,1)
//         }else{
//             console.log('NEMA');
//         }
//     }
// }



// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.addItem('🍎');
// console.table(storage.items)
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍎');
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.

// class User {}

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });
//   mango.login = 'asvasdadasd'
// console.log(mango);

// mango.login; // Mango
// mango.login = 'Mangodoge';
// console.log(mango);
// mango.login; // Mangodoge

//   const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie



// Example 4 - Нотатки
// Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     };
//     constructor(arr) {
//         this.items = arr;
//     }
//     addNote(note) {
//         this.items.push(note);
//     }
//     // removeNote(text) {
//     //     const idx = this.items.findIndex(({
//     //         text: itemText
//     //     }) => text === itemText)
//     //     console.log(idx);
//     //     if(!!~idx){
//     //         this.items.splice(idx,1)
//     //     }else{
//     //         console.log('НЕМАЄ');
//     //     }
//     // }
//     // removeNote(text) {
//     //    const inArr = this.items.some(item => item.text === text)
//     //     if(inArr){
//     //         const idx = this.items.findIndex(({
//     //             text: itemText
//     //         }) => text === itemText)
//     //         this.items.splice(idx,1)
//     //     }else{
//     //         console.log('НЕМАЄ');
//     //     }
//     // }
//     removeNote(text) {
//         const inArr = this.items.find(item => item.text === text)
//          if(inArr){
//              const idx = this.items.findIndex(({
//                  text: itemText
//              }) => text === itemText)
//              this.items.splice(idx,1)
//          }else{
//              console.log('НЕМАЄ');
//          }
//      }


//      updateNote(text, newPriority){
//         const inArr = this.items.find(item => item.text === text);
//         if(inArr){
//             inArr.priority = newPriority;
//         }else{
//             console.log('НЕМАЄ'); 
//         }
//      }
// }


// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'Моя перша нотатка',
//     priority: Notes.Priority.LOW
// });
// myNotes.addNote({
//     text: 'Моя друга нотатка',
//     priority: Notes.Priority.HIGH
// });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя друга нотатка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes.items);


// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За зомовчуванням значення властивості on має бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');