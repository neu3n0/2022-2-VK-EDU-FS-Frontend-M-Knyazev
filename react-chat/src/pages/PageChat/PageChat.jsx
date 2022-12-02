import React, { useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'

export default function PageChat(props) {

    const [mess, setMess] = useState([]);

    function sendMess(message) {
        if (message === '') return;
        const messages_container = localStorage.getItem('messages');
        let messages = JSON.parse(messages_container);
        const new_id = messages[props.chat_id][messages[props.chat_id].length - 1]['id'] + 1;
        let user = "me";
        if (message[0] === '/') {
            user = "kek";
            message = message.slice(1);   
        }
        const message_ = {
            "id": new_id,
            "author_username": user,
            "author_id": 2,
            "chat_title": "chatOne",
            "text": message,
            "pub_date": "11:12",
            "is_readed": false,
            "count_readers": 0,
            "edited": false
        };
        messages[props.chat_id].push(message_);
        localStorage.setItem("messages", JSON.stringify(messages));
        setMess(messages);
    }

    return (
        <div className="message-layout">
            {ChatHeader(props)}
            <ChatContent chat_id={props.chat_id} messages={mess}/>
            <ChatFooter chat_id={props.chat_id} sendMess={sendMess}/>
        </div>
    )
}