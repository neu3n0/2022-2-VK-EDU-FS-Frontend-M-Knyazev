import React from 'react'
import './ChatHeader.scss'
import '../button.scss'
import Avatar from '../../components/Avatar/Avatar';

export default function ChatHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <button className="button button-back" onClick={props.onClick}>
                    <span className="material-icons">arrow_back</span>
                </button>

                <div className="chat-info">
                    <Avatar />
                    <ChatHeaderUserInfo chat_id = {props.chat_id}/>
                </div>
            </div>

            <div className="header-right">
                <button className="button  button-find">
                    <span className="material-icons">search</span>
                </button>
                <button className="button button-settings">
                    <span className="material-icons">more_vert</span>
                </button>
            </div>
        </div>
    )
}


function ChatHeaderUserInfo(props) {
    let chats = localStorage.getItem('chats');
    chats = JSON.parse(chats);
    return (
        <div className="info">
            <div className="chat-name">
                <span className="kekw">
                    {chats[props.chat_id]['chat']['title']}
                </span>
            </div>
            <div className="chat-status">
                online
            </div>
        </div>
    )
}

