import React, { useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'

import { messagesExample } from "../../utils/messagesListExample";

export default function PageChat(props) {

    // if (!localStorage.getItem("messages")) {
    //     localStorage.setItem("messages", JSON.stringify(messagesExample))
    // }




    return (
        <div className="message-layout">
            {ChatHeader(props)}
            <ChatContent chat_id={props.chat_id} />
            <ChatFooter chat_id={props.chat_id}/>
        </div>
    )
}