import React, { useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'

import { messagesExample } from "../../utils/messagesListExample";

export default function PageChat(props) {

    let [mess, setMess] = useState([]);

    if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify(messagesExample));
        setMess(mess=messagesExample);
    }


    function sendMess(message) {
        if (message === '') return;
        let messages_container = localStorage.getItem('messages');
        let messages = JSON.parse(messages_container);
        let new_id = messages[props.chat_id][messages[props.chat_id].length - 1]['id'] + 1;
        let user = "me";
        if (message[0] === '/') {
            user = "kek";
            message = message.slice(1);   
        }
        let message_ = {
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
        setMess(mess=messages);
    }

    return (
        <div className="message-layout">
            {ChatHeader(props)}
            <ChatContent chat_id={props.chat_id}/>
            <ChatFooter chat_id={props.chat_id} sendMess={sendMess}/>
        </div>
    )
}