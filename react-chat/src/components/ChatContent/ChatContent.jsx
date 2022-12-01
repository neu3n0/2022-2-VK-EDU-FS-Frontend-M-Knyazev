import React from 'react'
import './ChatContent.scss'
import Message from '../../components/Message/Message';


export default function ChatContent(props) {

    let messages_list = JSON.parse(localStorage.getItem("messages"))
    let messages = messages_list[props.chat_id]

    const messagesList = messages.reverse().map((message) =>
        <Message key={message['id']} onClick={props.onClick} message={message} />
    );

    return (
        <div className="content-chat">
            <div className="message-container">
                {messagesList}
            </div>
        </div>
    )
}