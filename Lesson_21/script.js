// https://jsonplaceholder.typicode.com/posts
// const obk ={
//     name : 'User',
//     email: 'test@gmail.com',
//     age: 22
// }

// fetch(`https://hjkl/`, {
//     method: "PUT",
//     body: JSON.stringify({
//         email : 'test2@gmail.com'
//     })
// })

// https://developer.mozilla.org/ru/docs/Web/HTTP/Status/201
// Create => POST 
// const options = {
//     method : "POST",
//     body : JSON.stringify({
//         author: "Mango",
//         body: "CRUD is awesome"
//     }),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
// }

// fetch(`https://jsonplaceholder.typicode.com/posts`,options)
// .then(resp => resp.json())
// .then(data => console.log(data));

// SOAP API
// https://habr.com/ru/post/483204/
// https://firebase.google.com/

// READ => GET


// Update => PATCH & PUT 
// const arr = [{
//     id: 1,
//     name: "1",
//     age: 22
// }, {
//     id: 2,
//     name: "2"
// }, {
//     id: 3,
//     name: "3"
// }]

// fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
//     method : 'PATCH',
//     body: JSON.stringify({
//         name: 'Poly'
//     })
// }).then(resp => resp.json()).then(data => console.log(data))
// const obj1 = {
//     name: 'Poly'
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
//     method : 'PUT',
//     body: JSON.stringify({
//         name: 'Poly'
//     })
// }).then(resp => resp.json()).then(data => console.log(data))

// const arr = [{
//     id: 1,
//     name: "1",
//     age: 22
// }, {
//     id: 2,
//     name: "2"
// }, {
//     id: 3,
//     name: "3"
// }]

// // DELETE
// fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
//     method: 'DELETE'
// }).then(resp => resp.json()).then(data => console.log(data))





// https://rickandmortyapi.com/documentation/#location-schema
// export class API {
//     #BASE_URL;
//     #options;
//     constructor(url) {
//         this.#BASE_URL = url;
//         this.#options = {
//             headers: {

//             }
//         }
//     }
//     fetchCharacter(value = 1) {
//     return fetch(`${this.#BASE_URL}/character?page=${value}`, this.#options).then(resp => {
//         if(!resp.ok){
//             throw new Error(resp.statusText)
//         }
//         return resp.json()
//     }).catch(err => console.log(err))
//     }
//     fetchLocation(value = 1){
//         return fetch(`${this.#BASE_URL}/location?page=${value}`).then(resp => {
//             if(!resp.ok){
//                 throw new Error(resp.statusText)
//             }
//             return resp.json()
//         }).catch(err => console.log(err))
//     }
// }


// const rickandmortyApi = new API('https://rickandmortyapi.com/api')
// rickandmortyApi.fetchCharacter().then(data => console.log(data))
// rickandmortyApi.fetchLocation().then(data => console.log(data))



// const arr = [{
//     "name": "Switzerland",
//     "topLevelDomain": [
//         ".ch"
//     ],
//     "alpha2Code": "CH",
//     "alpha3Code": "CHE",
//     "callingCodes": [
//         "41"
//     ],
//     "capital": "Bern",

//     "languages": [{
//             "iso639_1": "de",
//             "iso639_2": "deu",
//             "name": "German",
//             "nativeName": "Deutsch"
//         },
//         {
//             "iso639_1": "fr",
//             "iso639_2": "fra",
//             "name": "French",
//             "nativeName": "français"
//         },
//         {
//             "iso639_1": "it",
//             "iso639_2": "ita",
//             "name": "Italian",
//             "nativeName": "Italiano"
//         },
//         {
//             "iso639_2": "roh",
//             "name": "Romansh"
//         }
//     ]
// }]

// console.log(arr);

// const h = document.querySelector('.names')
// h.insertAdjacentHTML('beforeend',`languages of my country: ${ getNames(arr)} `)
// const result = arr.map(value => {
//     return value.languages.map(language => language.name)
// })
// console.log(result.join(", "));

// function getNames(arr){
//     return arr.map(value => {
//         return value.languages.map(language => language.name)
//     }).join(', ')
// }




console.log(qwerty);


const name = 'user'
if(true){
    const name = 'qwerty';

    console.log(name);
}