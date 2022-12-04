import React from 'react'
import './ChatListHeader.scss'
import '../button.scss'
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function ChatListHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <Link to="profile">
                    <button className="button button-menu">
                        <MenuIcon/>
                    </button>
                </Link>
                <div className="messenger-info">
                    Kitty Messenger
                </div>
            </div>
            <div className="header-right">
                <button className="button  button-find">
                    <SearchIcon/>
                </button>
            </div>
        </div>


    )
}