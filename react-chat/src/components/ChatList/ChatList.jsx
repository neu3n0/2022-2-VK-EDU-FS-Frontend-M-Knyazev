import React from 'react'
import Dialogue from '../../components/Dialogue/Dialogue';
import './ChatList.scss'

export default function ChatList(props) {

    let chats = JSON.parse(localStorage.getItem("chats"))

    const listChats = chats.map((chat) =>
        <Dialogue key={chat['chat']['id']} onClick={() => props.onClick(chat['chat']['id'])} chat={chat} chat_id={chat['chat']['id']}/>
    );

    return (
        <div className="chats-list">
            <div className="chats-container">
                {listChats}
            </div>
        </div>

    )
}