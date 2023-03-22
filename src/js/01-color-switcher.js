//! В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// ? Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > на
// ? случайное значение используя инлайн стиль.При нажатии на кнопку «Stop», изменение цвета фона должно
// ? останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение темы
// запушено, кнопка «Start» была не активна(disabled).

//? Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangeColor(e) {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', true);
  body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor(e) {
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');

  clearInterval(timerId);
}
