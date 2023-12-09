'use strict';
const changeBtn = document.querySelector('.change-color'),
  span = document.querySelector('.color'),
  body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChanging = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};

changeBtn.addEventListener('click', onChanging);
