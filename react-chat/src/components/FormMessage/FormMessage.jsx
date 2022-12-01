import React from 'react'
import './FormMessage.scss'


export default function FormMessage(props) {

    // let message = {
    //     "id": 421,
    //     "author_username": "ivan",
    //     "author_id": 2,
    //     "chat_title": "chatOne",
    //     "text": "kekwekwkekwekwkew",
    //     "pub_date": "11:12",
    //     "is_readed": false,
    //     "count_readers": 0,
    //     "edited": false
    // };
    // let messages_container = localStorage.getItem('messages');
    // let messages = JSON.parse(messages_container);
    // messages[props.chat_id].push(message);

    // localStorage.setItem('messages', JSON.stringify(messages));

    return (
        <div className="input-line">
            <form className="form-message">
                <input className="form-input" name="message-text" placeholder="Enter your message" type="text" />
            </form>
        </div>
    )
}