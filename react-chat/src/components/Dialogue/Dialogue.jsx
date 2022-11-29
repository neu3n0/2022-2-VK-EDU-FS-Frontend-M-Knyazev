import React from 'react'
import './Dialogue.scss'
import Avatar from '../../components/Avatar/Avatar';

export default function Dialogue(props) {

    return (
        // <div className="chat-with-person" onClick={() => props.onClick('chat', props.chat_id)}>
        <div className="chat-with-person" onClick={props.onClick}>
            <Avatar/>
            <div className="chat-information">
                <div className="info-row">
                    <div className="title">
                        Scary Kitty
                    </div>
                    <div className="last-message-meta">
                        <div className="last-message-status">
                            <span className="material-icons done_all">done_all</span>
                        </div>
                        <div className="last-message-time">
                            10:56
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    meeeew-mew MEEEEW!
                </div>
            </div>
        </div>

    )
}