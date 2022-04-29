const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirmation');
const errors = document.querySelector('.errors');

const errorArray = [];

email.required = true;
zipCode.required = true;
country.required = true;
password.required = true;
passwordConfirm.required = true;

email.addEventListener('input', e => {
  if (email.validity.typeMismatch || email.value.length <= 0) {
    email.setCustomValidity('Please enter a valid email address');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

zipCode.addEventListener('input', e => {
  if (zipCode.value.length < 5 || !zipCode.value.match(/^[0-9]+$/)) {
    zipCode.setCustomValidity('Please enter a valid zip code');
    zipCode.reportValidity();
  } else {
    zipCode.setCustomValidity('');
  }
});

password.addEventListener('input', e => {
  if (password.validity.tooLong || password.validity.tooShort) {
    password.setCustomValidity('Password must be between 5 and 20 characters');
    password.reportValidity();
  } else if (password.validity.valueMissing) {
    password.setCustomValidity('Password is required');
    password.reportValidity();
  } else {
    password.setCustomValidity('');
  }
});

passwordConfirm.addEventListener('input', e => {
  if (passwordConfirm.value !== password.value) {
    passwordConfirm.setCustomValidity('Passwords do not match');
    passwordConfirm.reportValidity();
  } else {
    passwordConfirm.setCustomValidity('');
  }
});

form.addEventListener('submit', e => {
  if (email.validity.typeMismatch || email.value.length <= 0) {
    e.preventDefault();
    recieveError('Please enter a valid email address');
  }

  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    recieveError('Passwords do not match');
  }

  if (email.value === "" || country.value === "Select a country" || zipCode.value === "" || password.value === "" || passwordConfirm.value === "") {
    e.preventDefault();
    recieveError('Please fill out all fields');
  }

  if (zipCode.value.length < 5 || !zipCode.value.match(/^[0-9]+$/)) {
    e.preventDefault();
    recieveError('Please enter a valid zip code');
  }

  if (password.validity.tooLong || password.validity.tooShort) {
    e.preventDefault();
    recieveError('Password must be between 5 and 20 characters');
  } else if (password.validity.valueMissing) {
    e.preventDefault();
    recieveError('Password is required');
  }

  if (passwordConfirm.value !== password.value) {
    e.preventDefault();
    recieveError('Passwords do not match');
  }

  displayErrors();
});

function recieveError(error) {
  if (errorArray.includes(error)) {
    return;
  } 
  errorArray.push(error);
}

const arr = ['hello world'];

function displayErrors() {
  errors.innerHTML = errorArray.map(error => `<li>${error}</li>`).join('');
}