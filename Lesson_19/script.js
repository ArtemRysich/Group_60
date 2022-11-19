//  HTTP 1.1 vs HTTP 2.0
// https://www.google.com/imgres?imgurl=https%3A%2F%2Fcascadingmedia.com%2Fassets%2Fimages%2Finsites%2F2015%2F03%2Fhttp2%2Fhttp1-vs-http2-09a032a2.png&imgrefurl=https%3A%2F%2Fcascadingmedia.com%2Finsites%2F2015%2F03%2Fhttp-2.html&tbnid=Hm1Hfs4eiLceuM&vet=12ahUKEwjaoebXpbj7AhUHqYsKHWPpAVwQMygGegUIARC4AQ..i&docid=4EvuPcopD1HKDM&w=1602&h=1588&q=http%201%20vs%20http%202&ved=2ahUKEwjaoebXpbj7AhUHqYsKHWPpAVwQMygGegUIARC4AQ

// alt + z

// POSTMAN
// https://www.postman.com/downloads/

// API для уроки
// https://www.weatherapi.com/
// API_KEY 6d9e1f9bc39549bdb1b181332221811


// XMLHttpRequest
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest


// Типи Статусів 
// https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP

const form = document.querySelector('.js-search');
const list = document.querySelector('.list');

const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6d9e1f9bc39549bdb1b181332221811';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()

    const {
        query: {
            value: searchValue
        },
        days: {
            value: daysValue
        }
    } = evt.currentTarget.elements;

    if (!searchValue) {
        alert('Поле пусте 😢');
        return;
    }

    forecastApi(searchValue, daysValue).then(data => creatMarkup(data.forecast.forecastday));
}



function creatMarkup(arr) {
    const markup = arr.map(item => `<li>
    <img src="${item.day.condition.icon}" alt="">
    <span>${item.day.condition.text}</span>
    <h2>День: ${item.date}</h2>
    <h3>Температура: ${item.day.avgtemp_c}&#8451;</h3>
</li>`).join('');
list.innerHTML = markup;
}





function forecastApi(name = "Kiev", value = 7) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${value}`).then(resp => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .catch(err => console.error(err));
}


// ПЕРЕРВА ДО 21.00