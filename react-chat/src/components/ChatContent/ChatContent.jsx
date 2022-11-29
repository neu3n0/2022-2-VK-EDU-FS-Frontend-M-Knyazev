import React from 'react'
import './ChatContent.scss'
import Message from '../../components/Message/Message';


export default function ChatContent(props) {
    return (
        <div className="content-chat">
            <div className="message-container">
                <Message />
            </div>
        </div>
    )
}