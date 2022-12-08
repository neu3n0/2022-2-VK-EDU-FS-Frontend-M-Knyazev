import React, { useState } from 'react'
import './Dialogue.scss'
import Avatar from '../../components/Avatar/Avatar';

import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Dialogue(props) {
    // const messages_list = localStorage.getItem('messages');
    // const messages = JSON.parse(messages_list);
    const last_message = props.chat['last_message']
    let text = 'no messages';
    let pub_date = '???';
    if (last_message !== null) {
        text = props.chat['last_message']['text']
        pub_date = props.chat['last_message']['pub_date']
    }

    return (
        <div className="chat-with-person">
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
                            {pub_date}
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    {text}
                </div>
            </div>
        </div>
    )
}