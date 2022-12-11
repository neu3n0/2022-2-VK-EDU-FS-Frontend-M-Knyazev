import React from 'react'
import styles from './FormMessage.module.scss'


export default function FormMessage(props) {

    return (
        <div className={styles.inputLine}>
            <form className={styles.formMessage} onSubmit={props.handleSubmit}>
                <input className="form-input" name="message-text" placeholder="Enter your message" type="text" value={props.val} onChange={(e) => {props.setVal(e.target.value)}} />
            </form>
        </div>
    )
}