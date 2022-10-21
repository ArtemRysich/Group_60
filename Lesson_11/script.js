// https://dou.ua/lenta/articles/interview-questions-javascript-developer/
// const elem = document.querySelector('.js-elem');
// console.dir(elem);
const refs = {
    staticItems: document.querySelectorAll('.js-item'),
    dynemicItems: document.getElementsByClassName('js-item'),
    ul: document.querySelector('ul'),
};
console.dir(refs.ul);
// [...refs.ul.firstElementChild.children].forEach(item => {
//     // console.dir(item);
//     if(item.firstElementChild ?  item.firstElementChild.tagName === 'H1' : false){
//        console.log( item.firstElementChild.textContent);
//     }
// })
// OLD SCHOOL
// console.log(refs.dynemicItems[refs.dynemicItems.length-1]);
// const arr = [];
// for (let i = 1; i <= 3; i += 1) {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     const div = document.createElement('div');
//     const a = document.createElement('a')
//     div.append(a);
//     li.append(div);
//     li.append(img)
//     li.classList.add('js-item');
//     li.textContent = Number(refs.ul.lastElementChild.textContent) + i 
//     arr.push(li)
// }
// refs.ul.append(...arr);
// console.log(refs.dynemicItems[refs.dynemicItems.length - 1]);
// console.dir(refs.ul);
// console.log('staticItems', refs.staticItems);
// console.log('dynemicItems', refs.dynemicItems);

// const arr = []
// for (let i = 1; i <= 30; i += 1) {
// const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) + i}</li>`
// arr.push(markup)
// }
// refs.ul.insertAdjacentHTML('beforeend',arr.join(''))
// console.log(arr.join(''));



// const refs = {
//     text : document.querySelector('h1'),
//     input: document.querySelector('input')
// }

// console.dir(refs.input);
// console.dir(refs.text.dataset.id);
// console.log('data-id',refs.text.getAttribute('data-id'));
// console.log('id',refs.text.getAttribute('id'));
// refs.input.value = refs.text.textContent
// const test = document.querySelector('.js-list');
// test.classList.remove('js-list')
const cars = [{
        id: 1,
        car: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        id: 2,
        car: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        id: 33,
        car: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        id: 3,
        car: 'Honda',
        type: 'Accord',
        price: 20000,
        number: '+380000000000',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        id: 4,
        car: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
]
// const click = document.querySelector('.click')
// click.addEventListener('click', ()=>{
//     const listRef = document.querySelector('.js-list');
//     const markup = cars.reduce((acc, {
//         car,
//         type,
//         price,
//         img,
//         id
//     }) => acc + `<li data-id=${id}>
//     <img src="${img}" alt="${type}" class="img-car">
//     <h2>Марка: ${car}</h2>
//     <h2>Модель: ${type}</h2> 
//     <p>Ціна: ${price}</p>
//     </li>`, '')
//     test.insertAdjacentHTML('beforeend', markup)
// })
// const listRef = document.querySelector('.js-list');
// listRef.classList.remove('js-list')
// const markup = cars.map(({
//     car,
//     type,
//     price,
//     img,
//     id
// }) => `<li data-id=${id}>
// <img src="${img}" alt="${type}" class="img-car">
// <h2>Марка: ${car}</h2>
// <h2>Модель: ${type}</h2> 
// <p>Ціна: ${price}</p>
// </li>`).join('')



const markup = cars.reduce((acc, {
    car,
    type,
    price,
    img,
    id
}) => acc + `<li data-id=${id}>
<img src="${img}" alt="${type}" class="img-car">
<h2>Марка: ${car}</h2>
<h2>Модель: ${type}</h2> 
<p>Ціна: ${price}</p>
<div> ${id}</div>
</li>`, '')

// listRef.style.listStyle = 'none';
// listRef.style.display = 'flex';
// listRef.style.flexWrap = 'wrap';
// listRef.style.justifyContent ='space-between';
// // console.timeEnd('reduce');

// // console.log(markup);
refs.ul.insertAdjacentHTML('beforeend', markup)
refs.ul.addEventListener('click', (e)=>{
if(e.target.closest('li')){
    const id = e.target.closest('li').dataset.id
const currentCar = cars.find(({id: carId}) => carId === Number(id))
alert(currentCar.number)
}
})
// const items = document.querySelectorAll('li');
// items.forEach(item => item.style.width = '300px')
// console.log(items);

