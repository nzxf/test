const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = email.nextElementSibling;

// HTML SPECIFICATION
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// PAGE LOAD
window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? 'valid' : 'invalid';
});

// INPUT
email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

// SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'I expect a valid email, bruh!';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});
