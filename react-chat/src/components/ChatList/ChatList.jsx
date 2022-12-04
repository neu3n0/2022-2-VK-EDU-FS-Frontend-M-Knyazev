import React from 'react'
// import { useState } from 'react'
import Dialogue from '../../components/Dialogue/Dialogue';
import './ChatList.scss'
import { Link } from 'react-router-dom'

export default function ChatList(props) {

    const chats = JSON.parse(localStorage.getItem("chats"))

    // const [chat_id, setChatID] = useState(0);

    // function handleChatID(id) {
    //     setChatID(id);
    // }

    const listChats = chats.map((chat) =>
        <Link key={chat['chat']['id']} to={`chats/${chat['chat']['id']}`} style={{ textDecoration: 'none', color: '#333'}}>
            <Dialogue chat={chat} chat_id={chat['chat']['id']}/>
        </Link>
    );

    return (
        <div className="chats-list">
            <div className="chats-container">
                {listChats}
            </div>
        </div>

    )
}