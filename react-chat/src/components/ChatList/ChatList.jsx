import React from 'react'
import Dialogue from '../../components/Dialogue/Dialogue';
import './ChatList.scss'

export default function ChatList(props) {
    return (
        <div className="chats-list">
            <div className="chats-container">
                {Dialogue(props)}
            </div>
        </div>

    )
}