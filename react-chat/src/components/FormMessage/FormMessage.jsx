import React from 'react'
import './FormMessage.scss'


export default function FormMessage(props) {
    return (
        <div className="input-line">
            <form className="form-message" action="/">
                <input className="form-input" name="message-text" placeholder="Enter your message" type="text" autoComplete="off" />
            </form>
        </div>

    )
}