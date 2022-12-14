import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';

import styles from './Message.module.scss'


export default function Message(props) {
    let st = 'flex-end';
    if (props.message["author_username"] !== "neu3n0") {
        st = 'flex-start';
    }

    return (
        <div className={styles.message} style={{
            'justifyContent': st
        }}>

            <div className={styles.messageWrap}>
                <div className={styles.messageUp}>
                    <div className={styles.messageUsername}>
                    {props.message['author_username']}
                    </div>
                </div>
                <div className={styles.messageDown}>
                    <span className={styles.messageText}>
                        {props.message['text']}
                    </span>

                    <div className={styles.messageMeta}>
                        <div className={styles.messageStatus}>
                            <DoneAllIcon className="done_all" style={{ fontSize: '17px', color: 'rgb(35, 182, 35)' }} />
                        </div>
                        <div className={styles.messageTime}>
                            {props.message['pub_date']}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}