'use strict';
const nameInput = document.getElementById('name-input'),
  nameOutput = document.getElementById('name-output');

const inputHandler = event => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
};

nameInput.addEventListener('input', inputHandler);

nameInput.style.width = '350px';
nameInput.style.height = '40px';
nameInput.style.paddingTop = '8px';
nameInput.style.paddingBottom = '8px';
nameInput.style.paddingLeft = '16px';
nameInput.style.marginBottom = '16px';
nameInput.style.border = '1px solid #808080';
nameInput.style.borderRadius = '4px';
