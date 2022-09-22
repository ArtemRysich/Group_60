// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/
// https://www.codewars.com/

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: виведи значення використовуючи Object.keys() і for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;
// const arr = Object.keys(user);
// for (const key of arr){
//     console.log(`${key} - ${user[key]}`);
// }

// console.log(arr);
// console.log(user);






// Example 2 - метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
// Приклад власних властивостей
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// // salaries.Olga = 500;
// console.log(salaries);
// const test = Object.create(salaries);

// const arr = [1,2,3]
// console.log(arr);
// const num = 1;
// const newNumber = new Number(1);
// console.log(newNumber);




// test.Kate = 1140;
// test.David = 300;
// console.log(test);



// function getResult(obj) {
//     const values = Object.values(obj);
//     console.log(values);
//     let sum = 0;
//     // for (const value of values) {
//     //     sum += value;
//     // }

//     for (const key in obj) {
//         // console.log('ВСІ ВЛАСТИВОСТІ', key);
//         if (obj.hasOwnProperty(key)) {
//             console.log('Власні', key);
//         }
//         if(!obj.hasOwnProperty(key)){
//             console.log('NOT Власні', key);
//         }

//         sum += obj[key]
//     }
//     return sum;
// }
// console.log(getResult(test));


// Example 3 - Масив об'єктів
// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [{
        name: 'Смарагд',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Діамант',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Сапфір',
        price: 400,
        quantity: 7
    },
    {
        name: 'Аквамарин',
        price: 200,
        quantity: 2
    },
];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
//     return null
// }

// console.log(calcTotalPrice(stones, 'qwerty'));








// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.


/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',

};
// console.log('DO',Transaction);
// const test = Transaction.DEPOSIT
// delete Transaction.DEPOSIT
// Transaction.blabla = test
// console.log('AFTER',Transaction);










// const user = {
//     name: 'USER',
//     sayHello() {
//         console.log(`Hello i'm ${this.name}`);
//     }
// }

// user.sayHello()







/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [{
        amount: 1000,
        type: 'deposit',
        id: 1663783742100
    }],

    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
        const transaction = {
            amount,
            type,
            id: Date.now(),
        }
        return transaction
    },

    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount
    },

    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * Після чого додає його в історію транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('недостатньо коштів');
            return;
        }
        if (amount <= 200) {
            console.log('Знімайте більше');
            return
        }

        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;

    },

    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        alert(this.balance);
    },

    /*
     * Метод шукає та повертає об'єкт транзації по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                console.log(transaction);
            }
        }
    },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        console.log(type);
        let total = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }
        return total;
    },
};


// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.withdraw(1000)
// account.withdraw(2000)
// account.withdraw(1000)
// // account.getBalance()
// setTimeout(() => {

// }, 200)

// console.log(account);
// // account.getTransactionDetails(1663783742100)

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));




// function foo(obj) {
//     // const newObj = {
//     //     ...obj
//     // }
//     const newObj = JSON.parse(JSON.stringify(obj));
//     newObj.DEPOSIT = 'blablabla';
//     console.log(newObj);
// }
// foo(Transaction)
// console.log('Transaction', Transaction);