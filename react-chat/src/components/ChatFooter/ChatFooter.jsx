import React from 'react'
import './ChatFooter.scss'
import '../button.scss'
import FormMessage from '../../components/FormMessage/FormMessage';

export default function ChatFooter(props) {
    return (
        <div className="footer-chat">
            <div className="footer-left">
                <button className="button button-emoji">
                    <span className="material-icons">sentiment_satisfied</span>
                </button>

                <FormMessage/>

                <button className="button button-attach">
                    <span className="material-icons">attach_file</span>
                </button>
            </div>

            <div className="footer-right">
                <button className="button button-send">
                    <span className="material-icons">send</span>
                </button>
            </div>
        </div>


    )
}