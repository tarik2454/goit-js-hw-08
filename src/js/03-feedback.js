import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSumbmit);
input.addEventListener('input', throttle(onFormEntry, 500));
textarea.addEventListener('input', throttle(onFormEntry, 500));

showSavedObject();

function showSavedObject() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  input.value = savedData.email || '';
  textarea.value = savedData.message || '';
}

function onFormEntry() {
  const savedObject = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedObject));
}

function onFormSumbmit(event) {
  event.preventDefault();

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
