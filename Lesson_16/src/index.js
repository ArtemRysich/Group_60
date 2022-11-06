// https://t.me/IT_VN
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw

const content = document.querySelector('.content');
const restart = document.querySelector('.js-restart')
content.insertAdjacentHTML('beforeend', createMarkup());
content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);


const X_KEY = 'PlayerX';
const O_KEY = 'PlayerO';
let player = 'X';
let stepX = JSON.parse(localStorage.getItem(X_KEY)) || [];
let stepO = JSON.parse(localStorage.getItem(O_KEY)) || [];
const win = [
  [1, 2, 3],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7]
];



function startGame() {
  [...content.children].forEach(item => {
    const id = Number(item.dataset.id)

    if (stepX.includes(id)) {
      item.textContent = 'X';
    } else if (stepO.includes(id)) {
      item.textContent = 'O'
    }
  })
}
startGame()

// const test = [1, 2, 3]
// const isTrue = test.every(id => stepX.includes(id));
// console.log(win.some(item => console.log(item)));



function isWinner(arr) {
  return win.some(item => item.every(id => arr.includes(id)))
}

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`
  }

  return markup
}

function onClick(evt) {
  if (!evt.target.textContent) {
    evt.target.textContent = player;
    const id = Number(evt.target.dataset.id);
    let result;
    if (player === "X") {
      stepX.push(id)
      localStorage.setItem(X_KEY, JSON.stringify(stepX));
      result = isWinner(stepX);
    } else {
      stepO.push(id)
      localStorage.setItem(O_KEY, JSON.stringify(stepO));
      result = isWinner(stepO);
    }

    setTimeout(() => {
      if (result) {
        alert(`Winner ${player}`);
        onRestart();
        return;
      }
      player = player === "X" ? "O" : "X";
    })
  } else {
    alert('Change!!!')
  }
}






function onRestart() {
  player = "X";
  stepX = [];
  stepO = [];
  //   localStorage.removeItem(X_KEY);
  //   localStorage.removeItem(O_KEY);
  localStorage.clear()
  content.innerHTML = createMarkup();
}




// terminal vs GitHub

// ll ~/.ssh
// если ответ no such directory
// тогда 
// ssh-keygen -t rsa
// и на все вопросы  куда сохранять и тд просто ентер 
// дальше 
// cat ~/.ssh/id_rsa.pub
// должно сгенерировать код начинается должен с ssh
// копируем этот кусок и вставляем в гитхаб в настройки в раздел ssh/ ssh key new и сохраняем; при сохранении должно выкинуть на ввод пароля от гитхаб
// дальше
// git remote -v
// если ответ начинается на https надо заменить 
// заходим на гитхаб открывает репозиторий и зеленая кнопка выбираем неhttps a ssh b и копируем
// git remove set-url origin ссылка
// попросит ответ нажимаем yes и ентер
// все!












// const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (error) {
//       console.error("Set state error: ", error.message);
//     }
//   };


//   save('HELLO TEST',{name: "TEST NAME"})
//   save('HELLO TEST1',{name: "TEST NAME1"})
//   const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error("Get state error: ", error.message);
//     }
//   };
  
//   export default {
//     save,
//     load,
//   };













// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove')
// session.addEventListener('click', onSession)
// const arr = [1]

// function onSession() {


//   try {
//     const data = JSON.parse(localStorage.getItem('local')) || [];
//     if (data.length < 2) {
//       throw new Error('Array is empty');
//     }
//     console.log(data);
//     data.forEach(element => {
//       console.log(element);
//     });
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('hello world');
//   }
//   const data = JSON.parse(localStorage.getItem('local')) || [];
//   console.log(data);
//     data.forEach(element => {
//       console.log(element);
//     });



// }


// local.addEventListener('click', onLocal)

// function onLocal() {
//   localStorage.setItem('local', JSON.stringify(arr))
//   localStorage.setItem('local1', JSON.stringify(arr))
//   localStorage.setItem('local2', JSON.stringify(arr))
// }


// remove.addEventListener('click', onRemove)


// function onRemove() {
//   // localStorage.removeItem('local');
//   localStorage.clear()

// }