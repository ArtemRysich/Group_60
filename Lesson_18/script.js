// https://handlebarsjs.com/guide/
// Мікро процеси мають більший пріорітет
// Мікро процеси
// Observer
// Promise



// Макро процеси
// setTimeout
// setInterval
// setimmediate
// requestAnimationFrame


// В терміналі прописати
// npm install --save-dev parcel-transformer-hbs



// Додати в файл parcelrc
//  "transformers": {
//     "*.hbs": [
//         "parcel-transformer-hbs"
//       ]
//     }




// setTimeout(() => {'setTimeout'});

// Promise.resolve().then(()=> {console.log('Promise')})

// console.log('object');

// fetch()

// const promise = new Promise((res, rej) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if (random > 0.1) {
//             res(20)
//         } else {
//             rej("ERROR!!!")
//         }
//     }, 30)
// });

// // console.log(promise);
// promise
//     .then((res) => {
//         return res * 2
//     })
//     .then((data) => data / 18)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => {

//     })


// ПЕРЕРВА ДО 20.50

// console.log('Before');
// const promise = fetch('https://swapi.dev/api/people/1')
// promise
//     .then(res => res.json())
//     .then(data => {
//         foo(data)
//         console.log(data)
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('After promise'));
// console.log('After');

// function foo(obj) {
//     console.log('in function',obj);
// }


const isSuccess = Math.random() > 0.9;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve('Success! Value passed to resolve function');
        } else {
            reject('Error! Error passed to reject function');
        }
    }, 0);
});
promise
    .then(
        value => {
            console.log('onResolve call inside promise.then()');
            console.log(value); // "Success! Value passed to resolve function"
            return '1 yes';
        },
        error => {
            console.log('onReject call inside promise.then()');
            console.log(error); // "Error! Error passed to reject function"
            throw new Error('1 no')
        }
    )
    .then(
        x => {
            console.log(x);
            return '2 yes';
        },
        error => {
            console.log(error);
            throw new Error('2  no')
        }
    )
    .then(
        y => {
            console.log(y);
            console.log('3 yes');
        },
        error => {
            console.log(error);
            throw new Error('3 no')
        }
    );