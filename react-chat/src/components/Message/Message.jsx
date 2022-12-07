import React from 'react'
import './Message.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Message(props) {
    let st = 'flex-end'; 
    if (props.message["author_username"] !== "me") {
        st = 'flex-start';
    } 

    return (
        <div className="message" style={{
            'justifyContent': st
        }}>
            <div className="message-wrap">
                <span className="message-text">
                    {props.message['text']}
                </span>

                <div className="message-meta">
                    <div className="message-status">
                        <DoneAllIcon className="done_all" style={{fontSize: '17px',  color: 'rgb(35, 182, 35)'}}/>
                    </div>
                    <div className="message-time">
                        {props.message['pub_date']}
                    </div>
                </div>
            </div>
        </div>
    )
}