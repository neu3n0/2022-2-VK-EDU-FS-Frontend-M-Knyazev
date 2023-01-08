import React, {useState} from 'react'
import FormMessage from '../FormMessage/FormMessage';

import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

import '../button.scss'
import styles from './ChatFooter.module.scss'


export default function ChatFooter(props) {
    const [val, setVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('checker2');
        props.sendMess(val);
        setVal('');
    }

    return (
        <div className={styles.footerChat}>
            <div className={styles.footerLeft}>
                <button className="button button-emoji">
                    <SentimentSatisfiedIcon/>
                </button>

                <FormMessage chat_id={props.chat_id} handleSubmit={handleSubmit} val = {val} setVal = {setVal} />

                <button className="button button-attach">
                    <AttachFileIcon/>
                </button>
            </div>

            <div className={styles.footerRight}>
                <button className="button button-send" onClick={handleSubmit}>
                    <SendIcon/>
                </button>
            </div>
        </div>


    )
}