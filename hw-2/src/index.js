import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');

function handleSubmit(event) {
  event.preventDefault();
  message.innerText = input.value;
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    form.dispatchEvent(new Event('submit'));
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
