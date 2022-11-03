import '../styles/messages-page.css';

// function importAll(r) {
//     return r.keys().map(r);
//   }
  
// const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');

form.addEventListener('submit', handleSubmit.bind(this));
form.addEventListener('keypress', handleKeyPress.bind(this));

function handleSubmit (event) {
    event.preventDefault();
    message.innerText = input.value;
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}