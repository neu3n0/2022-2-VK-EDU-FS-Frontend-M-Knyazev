import React, { useState } from 'react'
import './FormMessage.scss'


export default function FormMessage(props) {

    const [val, setVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.sendMess(val);
        setVal('');
    }

    return (
        <div className="input-line">
            <form className="form-message" onSubmit={handleSubmit}>
                <input className="form-input" name="message-text" placeholder="Enter your message" type="text" value={val} onChange={(e) => {setVal(e.target.value)}} />
            </form>
        </div>
    )
}