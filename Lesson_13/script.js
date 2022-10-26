// const instruments = [{
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150
// }, {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000
// }, {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000
// }]
// const basket = [];
// const list = document.querySelector('.list');
// const markup = instruments.map(({
//     id,
//     img,
//     name,
//     price
// }) => `
// <li data-id='${id}'>
// <img src="${img}" alt="${name}" width="300px">
//     <h2>${name}</h2>
//     <p>${price}</p>
//     <div>
//     <button class="js-add">Купити</button>
//     <button class="js-favorite">В обране</button>
//     <button class="js-delete" disabled>Delete</button>
//     </div>
// </li>`).join('')
// list.insertAdjacentHTML('beforeend', markup);
// list.addEventListener('click', onClick);

// function onClick(evt) {
//     if (evt.target.classList.contains('js-add')) {
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         console.log(currentIdx);
//         const currentProduct = {
//             ...instruments.find(({
//                 id
//             }) => id === currentIdx)
//         };
//         const inBasket = basket.find(({
//             id
//         }) => id === currentIdx);
//         if (!inBasket) {
//             currentProduct.qty = 1;
//             basket.push(currentProduct)
//             console.dir(evt.target);
//             evt.target.parentElement.lastElementChild
//             .removeAttribute('disabled');
//         } else {
//             inBasket.qty += 1;
//         }
//         console.log(basket);
//     }

//     if (evt.target.classList.contains('js-delete')) {
//         console.dir(evt.target.closest('li'));
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         const idxInBasket = basket.findIndex(({
//             id
//         }) => id === currentIdx)
//         basket.splice(idxInBasket, 1)
//         evt.target.setAttribute('disabled', true)
//         console.log(basket)
//     }
// }






// const content = document.querySelector('.content');
// const restart = document.querySelector('.js-restart')

// let player = "X";
// const win = [
//     [1, 2, 3],
//     [3, 6, 9],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7]
// ];

// function createMarkup() {
//     let markup = '';
//     for (let i = 1; i <= 9; i += 1) {
//         markup += `<div class="item" data-id="${i}"></div>`
//     }

//     return markup
// }

// content.insertAdjacentHTML('beforeend', createMarkup());
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart)

// function onClick(evt) {
//     if (!evt.target.textContent) {
//         evt.target.textContent = player;
//         player = player === "X" ? "O" : "X";
//     } else {
//         alert('Change!!!')
//     }

// }

// function onRestart() {
//     player = "X";
//     content.innerHTML = createMarkup();
// }


const input = document.querySelector('input');
const add = document.querySelector('.create');
const des = document.querySelector('.destroy');
const boxes = document.querySelector('#boxes');
let size = 30;
add.addEventListener('click', onClick)
des.addEventListener('click', onDestroy)

function onClick() {
    const total = input.value;
    // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    const markup = [];
    for (let i = 1; i <= total; i += 1) {
        size += 10;
        const div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + "px";
        div.style.backgroundColor = getRandomHexColor()
        markup.push(div)
    }
    boxes.append(...markup)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function onDestroy() {
    // while (boxes.firstChild) {
    //     boxes.firstChild.remove();
    //   }
    input.value = "";
    boxes.innerHTML = "";
    size = 30
}



const arr = ['реклама', 'гойда', 'мопед', 'купи'];

setInterval(() => {
    const random = Math.round(Math.random() * 3)
   console.log(arr[random]);
    input.value = arr[random]
}, 500)