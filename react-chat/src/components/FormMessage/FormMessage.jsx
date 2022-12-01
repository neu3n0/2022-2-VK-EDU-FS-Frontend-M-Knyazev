import React from 'react'
import './FormMessage.scss'


export default function FormMessage(props) {

    return (
        <div className="input-line">
            <form className="form-message" onSubmit={props.handleSubmit}>
                <input className="form-input" name="message-text" placeholder="Enter your message" type="text" value={props.val} onChange={(e) => {props.setVal(e.target.value)}} />
            </form>
        </div>
    )
}