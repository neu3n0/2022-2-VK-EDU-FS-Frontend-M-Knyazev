import React from 'react'
import './Message.scss'


export default function Message(props) {
    return (
        <div className="message">
            <div className="message-wrap">
                <span className="message-text">
                    {props.message['text']}
                </span>

                <div className="message-meta">
                    <div className="message-status">
                        <span className="material-icons done_all">done_all</span>
                    </div>
                    <div className="message-time">
                        {props.message['pub_date']}
                    </div>
                </div>
            </div>
        </div>
    )
}