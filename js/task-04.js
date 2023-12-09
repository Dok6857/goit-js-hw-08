'use strict';

const loginForm = document.querySelector('.login-form'),
  submitBtn = document.querySelector('button[type="submit"]');

const submitHandler = event => {
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPassword = document.querySelector('input[type="password"]');

  if (inputEmail.value === '' || inputPassword.value === '') {
    return alert('All form fields must be filled in');
  } else {
    const user = {
      Email: inputEmail.value.trim(),
      Password: inputPassword.value.trim(),
    };

    console.log(user);
    loginForm.reset();
  }

  event.preventDefault();
};

loginForm.addEventListener('submit', submitHandler);
