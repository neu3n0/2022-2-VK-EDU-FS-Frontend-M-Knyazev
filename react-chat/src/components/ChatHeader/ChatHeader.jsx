import React from 'react'
import './ChatHeader.scss'
import '../button.scss'
import Avatar from '../../components/Avatar/Avatar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function ChatHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <button className="button button-back" onClick={props.onClick}>
                    <ArrowBackIcon/>
                </button>

                <div className="chat-info">
                    <Avatar />
                    <ChatHeaderUserInfo chat_id = {props.chat_id}/>
                </div>
            </div>

            <div className="header-right">
                <button className="button  button-find">
                    <SearchIcon/>
                </button>
                <button className="button button-settings">
                    <MoreVertIcon/>
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

