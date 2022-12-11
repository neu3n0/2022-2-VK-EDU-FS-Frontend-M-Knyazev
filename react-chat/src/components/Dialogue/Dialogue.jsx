import React from 'react'
import Avatar from '../Avatar/Avatar';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import styles from './Dialogue.module.scss'

export default function Dialogue(props) {
    const last_message = props.chat['last_message']
    let text = 'No messages';
    let pub_date = '?';
    if (last_message !== null) {
        text = props.chat['last_message']['text']
        pub_date = props.chat['last_message']['pub_date']
    }

    return (
        <div className={styles.chatWithPerson}>
            <Avatar/>
            <div className={styles.chatInformation}>
                <div className={styles.infoRow}>
                    <div className={styles.title}>
                        {props.chat['chat']['title']}
                    </div>
                    <div className={styles.lastMessageMeta}>
                        <div className={styles.lastMessageStatus}>
                            <DoneAllIcon style={{fontSize: '17px',  color: 'rgb(35, 182, 35)'}}/>
                        </div>
                        <div className={styles.lastMessageTime}>
                            {pub_date}
                        </div>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    {text}
                </div>
            </div>
        </div>
    )
}