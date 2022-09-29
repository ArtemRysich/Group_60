// const arr = [1, 2, 3, 4, 5];
// const result = arr.forEach(value => {
//     return value * 10
// })
// console.log(result);

// const result = arr.map(item => {
//     if (item > 3){
//         return item
//     }
// });
// console.log(result);


// const result = arr.filter(item => {
//     if (item === 3){
//         return item
//     }
// });
// console.log(result);




















// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [{ //a
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true
    },
    { //b
        make: 'Honda',
        model: 'accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false
    }
];


//   Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.


// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModels = arr => {
//     const models = arr.map(item => item.model)
//     return models
// };
// console.log(getModels(cars));


// const getModels = arr => arr.map(({model}) => model)

// console.log(getModels(cars));







// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним значенням властивості price залежно від переданої знижки (%).

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const makeCarsWithDiscount = (cars, discount) => {
//     const result = cars.map((car) => {
//         const changePrice = car.price / 100 * discount;
//         car.price -= changePrice
//         return car
//     })
//     return result
// };
// console.log(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));


// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//     car.price -= car.price / 100 * discount;
//     return car
//     })


// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//     car.price -= car.price / 100 * discount;
//     car.price = Math.ceil(car.price)
//     return car
// })


// console.log(makeCarsWithDiscount(cars, 6));
// console.log(makeCarsWithDiscount(cars, 11));






// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const filterByPrice = (cars, threshold) => {
//     const result = cars.filter((item) => {
//         if (item.price < threshold) {
//             return item
//         }
//     })
//     return result;
// };

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));






// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },


// const getCarsWithDiscount = cars => {
//     const result = cars.filter(car => {
//         // car.onSale === ''  =>  !car.onSale car.onSale === 0 => !car.onSale
//         if (car.onSale) {
//             return car
//         }
//     })
//     return result
// }

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale )



// // console.log(cars);
// console.log(getCarsWithDiscount(cars));


// Перерва до 20.50





// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getCarsWithType = (cars, type) => {
//     const result = cars.filter((car)=>{
//         if(car.type === type){
//             return car
//         }
//     })
//     return result
// }

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getCarsWithType = (cars, type) => cars.filter(({type: carType})=> carType === type )



// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));






// // Example 6 - Метод find


// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getCarByModel = (cars, model) => {
//     const result = cars.find((car)=>{
//         if(car.model ===model){
//             return car
//         }
//     }) 
//     return result
// };


// const getCarByModel = (cars, model) => cars.find((car)=> car.model === model)



// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));








// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
// https://learn.javascript.ru/string
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// https://unicode-table.com/en/

// const sortByAscendingAmount = cars => cars.sort((a,b) => a.amount - b.amount)

// const sortByAscendingAmount = cars => cars.sort()

// console.log(sortByAscendingAmount(cars));

// console.log(sortByAscendingAmount([1, 3, 14, 7, 10, 0, 2]));








// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));








// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотньому алфавітному порядку, залежно від значення параметра order.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const sortByModel = (cars, order) => {
//     let result;
//     if (order === 'asc') {
//         result = cars.sort((a, b) => a.model.localeCompare(b.model))
//     } else {
//         result = cars.sort((a, b) => b.model.localeCompare(a.model))
//     }
//     return result
// };
// console.log(sortByModel(cars, 'asc'));
// console.log(cars);
// console.log(sortByModel(cars, 'desc'));







// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },


// const getTotalAmount = cars => {
//     const result = cars.reduce((acc, car) => {
//         console.log(acc);
//         return acc + car.amount
//     },0)
//     return result
// };


// let acc = []
// for(const car of cars){
//     acc.push(car.amount)
// }
// console.log(acc);

// console.log(getTotalAmount(cars));




// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// const getModelsOnSale = cars => {
//     const result = cars.filter((car) => car.onSale).map(({model}) => model)
//     return result
// };

// console.log(getModelsOnSale(cars));





// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає список (Марка, Модель  Ціна) автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
// // {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// Кількість автомобілів ХХ:
// 1...Honda CR-V 24045
// 2...Honda Accord 21045

// const getSortedCarsOnSale = cars => {
//     const result = cars.filter((car) => car.onSale).sort((a,b) => a.price - b.price);
//   return  result.reduce((acc,car,idx)=>{
//         return acc + `${idx+1}. ${car.make} ${car.model} ціна ${car.price}\n`
//     },result.length ? `Кількість автомобілів ${result.length}:\n` : 'Немає 😂')

// };

// console.log(getSortedCarsOnSale(cars));

// const acc ={
//     name:'User'
// }
// const value = 'name'
// obj.name
// obj[value]





// Потрібно повернути обєкт де ключом являється назва літери а значенням та кількість раз скільки ця літера зустрічаєьься в рядку 
const str = 'fwewfwfaczfascawdczxzsdaczzcsfacaDAxcadfa';
const st1 = 'fwewfwfaczfascazvdxfndgfmretnsrafGDBhwerDAxcadfa';

// function foo(str) {
//     str = str.split('');
//     return str.reduce((acc, value) => {
//         // if(key in obj)
//         if (acc.hasOwnProperty(value)) {
//             acc[value] += 1
//         } else {
//             acc[value] = 1
//         }
//         return acc;
//     }, {})
// }


// function foo(str) {
//     str = str.split('');
//     const acc = {};
//     for (const value of str) {
//         if (acc.hasOwnProperty(value)) {
//             acc[value] += 1
//         } else {
//             acc[value] = 1
//         }
//     }
//     return acc
// }



// console.log(foo(str));
// console.log(foo(st1));

// const students = [{
//         name: "Манго",
//         courses: ["математика", "фізика"]
//     },
//     {
//         name: "Полі",
//         courses: ["інформатика", "математика"]
//     },
//     {
//         name: "Ківі",
//         courses: ["фізика", "біологія"]
//     },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// const uniqueCourses = allCourses.filter(
//     (course, index, array) => {
//         console.log(array);
//         array.indexOf(course) === index
//     }
// );


// .Не можу розібратися з прикладом з конспекту. Можете його пояснити? Особливо не зрозуміло про (!acc.hasOwnProperty(tag))

// Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

// const tweets = [{
//         id: "000",
//         likes: 5,
//         tags: ["js", "nodejs"]
//     },
//     {
//         id: "001",
//         likes: 2,
//         tags: ["html", "css"]
//     },
//     {
//         id: "002",
//         likes: 17,
//         tags: ["html", "js", "nodejs"]
//     },
//     {
//         id: "003",
//         likes: 8,
//         tags: ["css", "react"]
//     },
//     {
//         id: "004",
//         likes: 0,
//         tags: ["js", "nodejs", "react"]
//     },
// ];

// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// [1, 2, [3, 4], 5].flatMap()[1, 2, 3, 4, 5]



// Репета на відео показував прикла переберання масиву.Не зрозумів о кінця даний приклад, особливо acc[tag] у
// if.Поясніть будь ласка цей приклад більш детально.
// const tweets = [{
//         id: "000",
//         likes: 5,
//         tags: ["js", "nodejs"]
//     },
//     {
//         id: "001",
//         likes: 2,
//         tags: ["html", "css"]
//     },
//     {
//         id: "002",
//         likes: 17,
//         tags: ["html", "js", "nodejs"]
//     },
//     {
//         id: "003",
//         likes: 8,
//         tags: ["css", "react"]
//     },
//     {
//         id: "004",
//         likes: 0,
//         tags: ["js", "nodejs", "react"]
//     },
// ];


// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// const tagsStarts = allTags.reduce((acc, tag) => {
//     if (acc[tag]) { //undefined => false / true
//         acc[tag] += 1
//         return acc;
//     }

//     acc[tag] = 1
//     return acc
// }, {})


const obj = {
    years: 0
}
// obj['years']//undefined
if(obj.hasOwnProperty('years')){
    console.log('Ключ є');
}else{
    console.log('НЕМАЄ');
}