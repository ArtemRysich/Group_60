// https://the-one-api.dev/documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// XJlq9OFMcHAy8pAQK7xj
// const list = document.querySelector('.list')
// const load = document.querySelector('.load')
// let page = 1;
// load.addEventListener('click', onLoad)

// function ringsApi(page = 1) {
//     const options = {
//         headers: {
//             Authorization: 'Bearer XJlq9OFMcHAy8pAQK7xj'
//         }
//     }
//     const BASE_URL = 'https://the-one-api.dev/v2/character'
//     return fetch(`${BASE_URL}?limit=300&page=${page}`, options).then(resp => {
//         if (!resp.ok) {
//             throw new Error()
//         }
//         return resp.json()
//     })
// }

// ringsApi().then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.docs))
// }).catch(err => console.log(err))



// function createMarkup(arr) {
//     return arr.map(({
//         name,
//         race
//     }) => `<li>
//     <h2>${name}</h2>
//     <span>${race}</span>
//     </li>`).join('')
// }



// function onLoad() {
//     page += 1;
//     ringsApi(page).then(data => {
//         list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
//         if (data.page === data.pages) {
//             load.setAttribute('hidden', true)
//         }
//     }).catch(err => console.log(err))
// }


const list = document.querySelector('.list');
const guard = document.querySelector('.js-guard');
const options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0
}
let page = 0;
const observer = new IntersectionObserver(onLoad, options);
observer.observe(guard)
function onLoad(entries, observer) {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            page+=1;
            ringsApi(page).then(data => {
                list.insertAdjacentHTML('beforeend', createMarkup(data.docs))
                if(data.page === data.pages){
                    observer.unobserve(guard)
                }
            })
            // console.log('Бачу 😎');
        }
    })
    console.log(entries);
}
// let counter = 0
// document.addEventListener('scroll',()=>{
// counter+=1
// console.log('counter',counter);
// })


function ringsApi(page = 1) {
    const options = {
        headers: {
            Authorization: 'Bearer XJlq9OFMcHAy8pAQK7xj'
        }
    }
    const BASE_URL = 'https://the-one-api.dev/v2/character'
    return fetch(`${BASE_URL}?limit=300&page=${page}`, options).then(resp => {
        if (!resp.ok) {
            throw new Error()
        }
        return resp.json()
    })
}

function createMarkup(arr) {
    return arr.map(({
        name,
        race
    }) => `<li>
    <h2>${name}</h2>
    <span>${race}</span>
    </li>`).join('')
}


// ringsApi().then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.docs))
 
// }).catch(err => console.log(err))