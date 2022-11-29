import React from 'react'
import './ChatListHeader.scss'
import '../button.scss'


export default function ChatListHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <button className="button button-menu">
                    <span className="material-icons">menu</span>
                </button>
                <div className="messenger-info">
                    Kitty Messenger
                </div>
            </div>
            <div className="header-right">
                <button className="button  button-find">
                    <span className="material-icons">search</span>
                </button>
            </div>
        </div>


    )
}