import '../styles/chats-list.css';
import '../styles/general.css';
import '../styles/chat-header.css';
import '../styles/avatar.css';
import '../styles/button.css';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

let chat = document.querySelector(".chat-with-person");
chat.addEventListener('click', goToMessagesPage.bind(this));

function goToMessagesPage() {
    // chat.preventDefault();
    window.location.href = './messages-page.html'
}