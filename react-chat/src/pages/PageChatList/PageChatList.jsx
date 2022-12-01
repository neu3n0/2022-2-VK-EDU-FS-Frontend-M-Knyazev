import React from 'react'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';
import ChatList from '../../components/ChatList/ChatList';
import FloatButton from '../../components/FloatButton/FloatButton';
import './PageChatList.scss'

import { chatsExample } from "../../utils/chatListExample";
import { messagesExample } from "../../utils/messagesListExample";


export default function PageChatList(props) {

    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chatsExample))
    }

    if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify(messagesExample));
    };

    return (
        <div className="chat-layout">
            <ChatListHeader />
            {ChatList(props)}
            <FloatButton />
        </div>
    )
}