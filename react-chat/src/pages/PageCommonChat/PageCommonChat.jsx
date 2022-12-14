import React, { useEffect, useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageCommonChat.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import styles from '../PageChat/PageChat.module.scss'
import stylesMess from '../../components/Message/Message.module.scss'
import stylesContent from '../../components/ChatContent/ChatContent.module.scss'


export function PageCommonChat(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const poll = () => {
            fetch('https://tt-front.vercel.app/messages/')
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    setMessages(data)
                });
        }
        const intervalId = setInterval(() => poll(), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    const messagesList = messages.reverse().map((message) =>
        <MessageCommon key={message['_id']} message={message} />
    );


    function sendMess(message) {
        fetch("https://tt-front.vercel.app/message", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "author": "neu3n0",
                "text": message
            })
        }).then(resp => resp.json())
    }

    return (
        <div className={styles.messageLayout}>
            <ChatHeader chat={1111111} />
            <div className={stylesContent.contentChat}>
                <div className={stylesContent.messageContainer}>
                    {messagesList}
                </div>
            </div>
            <ChatFooter chat_id={1111111} sendMess={sendMess} />
        </div>
    )
}


function MessageCommon(props) {
    let st = 'flex-end';
    if (props.message["author"] !== "neu3n0") {
        st = 'flex-start';
    }

    return (
        <div className={stylesMess.message} style={{
            'justifyContent': st
        }}>

            <div className={stylesMess.messageWrap}>
                <div className={stylesMess.messageUp}>
                    <div className={stylesMess.messageUsername}>
                        {props.message['author']}
                    </div>
                </div>
                <div className={stylesMess.messageDown}>
                    <span className={stylesMess.messageText}>
                        {props.message['text']}
                    </span>

                    <div className={stylesMess.messageMeta}>
                        <div className={stylesMess.messageStatus}>
                            <DoneAllIcon className="done_all" style={{ fontSize: '17px', color: 'rgb(35, 182, 35)' }} />
                        </div>
                        <div className={stylesMess.messageTime}>
                            {props.message['timestamp']}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}