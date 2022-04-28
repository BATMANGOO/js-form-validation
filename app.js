const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirmation');

email.addEventListener('input', e => {
  if (email.validity.typeMismatch) {
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

form.addEventListener('submit', e => {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    passwordConfirm.setCustomValidity('Passwords do not match');
    passwordConfirm.reportValidity();
  } else {
    passwordConfirm.setCustomValidity('');
    form.submit();
  }

  if (email.value === "" || country.value === "Select a country" || zipCode.value === "" || password.value === "" || passwordConfirm.value === "") {
    e.preventDefault();
    alert('Please fill in all fields');
  }
});