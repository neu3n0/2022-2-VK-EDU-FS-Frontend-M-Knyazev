import React from 'react'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';
import ChatList from '../../components/ChatList/ChatList';
import FloatButton from '../../components/FloatButton/FloatButton';
import './PageChatList.scss'

import {chatsExample} from "../../chatListExample";

export default function PageChatList(props) {
    return (
        <div className="chat-layout">
            <ChatListHeader/>
            {ChatList(props)}
            <FloatButton/>
        </div>

    )
}