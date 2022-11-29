import React from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'

export default function PageChat(props) {
    return (
        <div className="message-layout">
            {ChatHeader(props)}
            <ChatContent />
            <ChatFooter />
        </div>
    )
}