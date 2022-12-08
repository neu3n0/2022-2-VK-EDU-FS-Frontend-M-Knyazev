import React from 'react'
import './ChatContent.scss'
import Message from '../../components/Message/Message';


export default function ChatContent(props) {

    // const messages_list = JSON.parse(localStorage.getItem("messages"))
    // const messages = messages_list[props.chat_id]
    const messagesList = props.messages.map((message) =>
        <Message key={message['id']} message={message} />
    );

    return (
        <div className="content-chat">
            <div className="message-container">
                {messagesList}
            </div>
        </div>
    )
}