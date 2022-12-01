import React, {useState} from 'react'
import './ChatFooter.scss'
import '../button.scss'
import FormMessage from '../../components/FormMessage/FormMessage';

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
                    <span className="material-icons">sentiment_satisfied</span>
                </button>

                <FormMessage chat_id={props.chat_id} handleSubmit={handleSubmit} val = {val} setVal = {setVal} />

                <button className="button button-attach">
                    <span className="material-icons">attach_file</span>
                </button>
            </div>

            <div className="footer-right">
                <button className="button button-send" onClick={handleSubmit}>
                    <span className="material-icons">send</span>
                </button>
            </div>
        </div>


    )
}