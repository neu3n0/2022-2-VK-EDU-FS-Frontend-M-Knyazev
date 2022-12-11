import React from 'react'
import './ChatHeader.scss'
import '../button.scss'
import Avatar from '../../components/Avatar/Avatar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom'


export default function ChatHeader({user}) {
    return (
        <div className="header-chat">
            <div className="header-left">
            <Link to="/chats">
                <button className="button button-back">
                    <ArrowBackIcon/>
                </button>
            </Link>
                <div className="chat-info">
                    <Avatar />
                    <ChatHeaderUserInfo user = {user}/>
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


function ChatHeaderUserInfo({user}) {
    if (user === 1111111) {
        return (
            <div className="info">
                <div className="chat-name">
                    <span className="kekw">
                        commonChat
                    </span>
                </div>
                <div className="chat-status">
                    online
                </div>
            </div>
        )
    } else {
        // let chats = localStorage.getItem('chats');
        // chats = JSON.parse(chats);
        return (
            <div className="info">
                <div className="chat-name">
                    <span className="kekw">
                        {/* {chats[chat_id]['chat']['title']} */}
                        {user}
                    </span>
                </div>
                <div className="chat-status">
                    online
                </div>
            </div>
        )
    }
}

