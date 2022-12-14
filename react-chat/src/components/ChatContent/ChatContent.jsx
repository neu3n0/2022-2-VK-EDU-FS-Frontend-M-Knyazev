import React from 'react'
import Message from '../Message/Message';

import styles from './ChatContent.module.scss'


export default function ChatContent(props) {

    const messagesList = props.messages.map((message) =>
        <Message key={message['id']} message={message} />
    );

    return (
        <div className={styles.contentChat}>
            <div className={styles.messageContainer}>
                {messagesList}
            </div>
        </div>
    )
}