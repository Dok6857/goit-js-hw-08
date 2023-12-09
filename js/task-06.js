'use strict';

const input = document.querySelector('#controls input'),
  createBtn = document.querySelector('button[data-create]'),
  destroyBtn = document.querySelector('button[data-destroy]'),
  boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onCreate = () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  const boxes = Array.from({ length: amount }, (_, index) =>
    createBox(index + 1)
  );
  boxesContainer.append(...boxes);
  input.value = '';
};

function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${30 + size * 10}px`;
  box.style.height = `${30 + size * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

const onDestroy = () => {
  boxesContainer.innerHTML = '';
};

createBtn.addEventListener('click', onCreate);
destroyBtn.addEventListener('click', onDestroy);
