// const cars = [{
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
//     }, {
//         id: 33,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
//     }, {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
//     }, {
//         id: 4,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
//     }
// ]

// const list = document.querySelector('.list');
// const form = document.querySelector('.js-search');
// form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//     evt.preventDefault();
//     //     const {
//     //         elements: {
//     //             searchQuery,
//     //             searchKey
//     //         }
//     //     } = evt.currentTarget;
//     const {
//         searchQuery,
//         searchKey
//     } = evt.currentTarget.elements;
//     // const currentCars = cars.filter(item => item[searchKey.value].toLowerCase()  === searchQuery.value.trim().toLowerCase());
//     console.log(searchQuery.value.trim().toLowerCase());
//     const currentCars = cars.filter(item => item[searchKey.value].toLowerCase().includes(searchQuery.value.trim().toLowerCase()));
//     if(currentCars.length) {
//         list.innerHTML = createMarkup(currentCars);
//     }else{
//         list.innerHTML = `<li><img src="https://miro.medium.com/max/720/1*hFwwQAW45673VGKrMPE2qQ.png" alt="404" width="300px"></img></li>`
//     }

// }


// function createMarkup(arr){
//    return arr.map(({
//         car,
//         type,
//         price,
//         img,
//         id
//     }) => `<li data-id=${id}>
//     <img src="${img}" alt="${type}" width="300px">
//     <h2>Марка: ${car}</h2>
//     <h2>Модель: ${type}</h2> 
//     <p>Ціна: ${price}</p>
//     </li>`).join('')
// }

// list.insertAdjacentHTML('beforeend', createMarkup(cars))

// const input = document.querySelector('.js-input');
// const title = document.querySelector('.js-title');
// input.addEventListener('input', onSearchInput)
// input.addEventListener('change', onSearchChange)


// function onSearchInput(evt){
//     console.dir(evt.currentTarget);
//     title.textContent = evt.currentTarget.value
// }

// function onSearchChange(){
// alert("ПОВЕРНИСЬ В ІНПУТ")
// }
const obj = {
    name: 'Iphone',
    price: '1200$',
    color: 'black'
}

const clickMe = document.querySelector('.js-click');
clickMe.addEventListener('click', onClickMe.bind(obj));
let counter = 1

function onClickMe(evt) {
    console.log(evt);
    console.log(this);
    const changeValue = 50 * counter;
    counter += 1
    evt.currentTarget.style.margin = `${changeValue}px ${changeValue}px`;
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // document.addEventListener('keydown', onKey,{once: true})
    // document.addEventListener('keydown', onKey)
}




// function onKey(evt) {
//     console.log(evt);
//     if (evt.code === 'Escape') {
//         document.body.classList.toggle('test')
//         document.removeEventListener('keydown', onKey)
//     }
// }


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules