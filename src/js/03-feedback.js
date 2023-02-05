import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onLabelInput, 500));

const formInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

function onLabelInput(event) {
  formInfo[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInfo));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function savedFormValues(formInfo) {
  if (formInfo) {
    email.value = formInfo.email || '';
    message.value = formInfo.message || '';
  }
}

savedFormValues(formInfo);
