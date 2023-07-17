import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSumbmit);
feedbackForm.addEventListener('input', throttle(onFormFillChange, 500));

const userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

fillFormFields(userData);

function fillFormFields(userData) {
  for (const key in userData) {
    if (userData.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = userData[key];
    }
  }
}

function onFormFillChange(event) {
  const { target } = event;

  const fieldName = target.name;
  const fieldValue = target.value;

  userData[fieldName] = fieldValue;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function onFormSumbmit(event) {
  event.preventDefault();

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
