import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = '"feedback-form-state"'

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
const formData = {};

populateTextArea();

function onFormSubmit(evt) {
evt.preventDefault();
console.log(formData);
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);

};

function onFormInput(evt) {
 formData[evt.target.name] = evt.target.value;
 const formDataJSON = JSON.stringify(formData);
 localStorage.setItem(STORAGE_KEY, formDataJSON);
};

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedMessageParced = JSON.parse(savedMessage);

    if (savedMessage) {
        textarea.value = savedMessageParced.message;
        input.value = savedMessageParced.email;
    }
}
