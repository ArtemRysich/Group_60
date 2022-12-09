// Асинхрона функція вона блокує лише виконання синхроного коду в середині себе після await та не блокує виконання синхроного коду поза межами функції


// async function foo() {
//     const notAwait = fetch('https://swapi.dev/api/people/2/');// 
//     console.log('notAwait', notAwait);
//     const withAwait = await fetch('https://swapi.dev/api/people/1/');//
//     console.log('withAwait', withAwait);
//     console.log('просто консоль');

//     // const data = await resp.json()
//     // console.log(data);

//     // return 'Hello'
// }
// console.log("foo()", foo());
// for(let i = 0; i < 20; i+=1){
//     console.log('value i ' , i);
// }
// foo()
// .then(data => console.log('data', data))
// .catch(err => console.log("err", err))

// const list = document.querySelector('.list')
// async function foo() {
//     try {
//         const resp = await fetch('https://swapi.dev/api/people/1/'); //
//         if (!resp.ok) {
//             throw new Error('RESP NOT OK!')
//         }
//         const data = await resp.json();

//         list.insertAdjacentHTML('beforeend', `<li>
//     <h1>${data.name}</h1>
//     <h2>${data.gender}</h2>
//     </li>`)
//     } catch (err) {
//         console.log(err);
//     }
// }
// foo();

// Послідовні запити
// async function foo() {
//     const resp = await fetch('https://swapi.dev/api/people/1/');
//     const resp1 = await fetch('https://swapi.dev/api/people/2/');
//     const resp2 = await fetch('https://swapi.dev/api/people/3/');
//     const resp3 = await fetch('https://swapi.dev/api/people/4/');
//     if (!resp.ok) {
//         throw new Error('RESP NOT OK!')
//     }
//     const data = await resp.json();
//     const data1 = await resp1.json();
//     const data2 = await resp2.json();
//     const data3 = await resp3.json();
//     console.log(data,data1,data2,data3);
//     return data;
// }

// foo().then(data => {
//     list.insertAdjacentHTML('beforeend', `<li>
// <h1>${data.name}</h1>
// <h2>${data.gender}</h2>
// </li>`)
// }).catch(err => console.log(err));


//     console.log(err);


// Перерва до 19.15




// Паралельні
async function foo() {
    const arr = [1, 2, 3, 4];
    const resps = await arr.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`))
    console.log(resps);



    // return data;
}
foo()