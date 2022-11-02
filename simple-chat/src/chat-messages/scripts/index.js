import '../styles/index.css';
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../img/', false, /\.(png|jpe?g|svg)$/));

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
let message_container = document.querySelector('.message-container');
const myName = 'Scary Kitty';
// localStorage.clear();
checkLocalStorage();
getMessageFromLS();
let objDiv = document.querySelector(".content-chat");
objDiv.scrollTop = objDiv.scrollHeight;
form.addEventListener('submit', this.handleSubmit.bind(this));
form.addEventListener('keypress', this.handleKeyPress.bind(this));

function handleSubmit (event) {
    event.preventDefault();
    sendMessage()
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        form.dispatchEvent(new Event('submit'));
    }
}

function showMessage(message) {
    let new_message = document.createElement('div');
    new_message.className = 'message';

    if (message.name != myName)
        new_message.style.justifyContent = 'start';

    let new_message_wrap = document.createElement('div');
    new_message_wrap.className = 'message-wrap';

    let user_message_text = document.createElement('span');
    user_message_text.className = 'message-text';
    user_message_text.innerHTML = message.text;

    let nowTime = new Date();
    let user_message_time = document.createElement('span');
    user_message_time.className = 'message-time';
    user_message_time.innerHTML =  message.time;

    new_message_wrap.append(user_message_text);
    new_message_wrap.append(user_message_time);
    new_message.append(new_message_wrap);
    message_container.append(new_message);
    input.value = '';
}

function sendMessage() {
    if (input.value === '') return;
    name = myName;
    text = input.value;
    if (text == '/clear') {
        localStorage.clear();
        input.value = '';
        location.reload();
        return;
    }
    if (text[0] == '/') {
        name = 'Kek';
        text = text.slice(1);
    }
    let nowTime = new Date();

    let message = {
        'name': name,
        'text': text,
        'time': String(nowTime.getHours()) + ":" + (nowTime.getMinutes() < 10 ? ('0' + String(nowTime.getMinutes())) : String(nowTime.getMinutes())),
    }

    saveMessageToLS(message);
    showMessage(message);
    let objDiv = document.querySelector(".content-chat");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function checkLocalStorage() {
    if (!localStorage.getItem('messages-container')) {
        localStorage.setItem('messages-container', JSON.stringify({'messages': []}));
    }
}

function saveMessageToLS(message) {
    let messages_container = localStorage.getItem('messages-container');
    let messages = JSON.parse(messages_container);
    messages.messages.push(message);
    localStorage.setItem('messages-container', JSON.stringify(messages));
}

function getMessageFromLS() {
    let messages_container = localStorage.getItem('messages-container');
    if (!message_container) return;
    let messages = JSON.parse(messages_container);
    for (let message of messages.messages)
        showMessage(message);
}
