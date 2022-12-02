import React from 'react'
import './Dialogue.scss'
import Avatar from '../../components/Avatar/Avatar';

import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Dialogue(props) {
    const messages_list = localStorage.getItem('messages');
    const messages = JSON.parse(messages_list);
    return (
        // <div className="chat-with-person" onClick={() => props.onClick('chat', props.chat_id)}>
        // <div className="chat-with-person" onClick={props.onClick}>
        <div className="chat-with-person" onClick={() => props.onClick(2)}>
            <Avatar/>
            <div className="chat-information">
                <div className="info-row">
                    <div className="title">
                        {props.chat['chat']['title']}
                    </div>
                    <div className="last-message-meta">
                        <div className="last-message-status">
                            <DoneAllIcon className="done_all" style={{fontSize: '17px',  color: 'rgb(35, 182, 35)'}}/>
                        </div>
                        <div className="last-message-time">
                            {props.chat['last_message']['pub_date']}
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    {messages[props.chat_id][messages[props.chat_id].length - 1]['text']}
                </div>
            </div>
        </div>

    )
}