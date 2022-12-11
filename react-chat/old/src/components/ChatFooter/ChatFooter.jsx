import React, {useState} from 'react'
import './ChatFooter.scss'
import '../button.scss'
import FormMessage from '../../components/FormMessage/FormMessage';

import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

export default function ChatFooter(props) {
    const [val, setVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.sendMess(val);
        setVal('');
    }

    return (
        <div className="footer-chat">
            <div className="footer-left">
                <button className="button button-emoji">
                    <SentimentSatisfiedIcon/>
                </button>

                <FormMessage chat_id={props.chat_id} handleSubmit={handleSubmit} val = {val} setVal = {setVal} />

                <button className="button button-attach">
                    <AttachFileIcon/>
                </button>
            </div>

            <div className="footer-right">
                <button className="button button-send" onClick={handleSubmit}>
                    <SendIcon/>
                </button>
            </div>
        </div>


    )
}