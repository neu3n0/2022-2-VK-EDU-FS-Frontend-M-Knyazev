import React from 'react'
import '../button.scss'
import { Link } from 'react-router-dom'
import styles from './ChatProfileHeader.module.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

export default function ChatProfileHeader(props) {
    return (
        
        <div className={styles.headerChat}>
            <div className={styles.headerLeft}>
                <Link to="/">
                    <button className="button button-back">
                        <ArrowBackIcon />
                    </button>
                </Link>

                <div className={styles.editProfile}>
                    Edit Profile
                </div>
            </div>

            <div className={styles.headerRight}>
                <button className="button  button-find" onClick={() => {props.setUser()}}>
                    <DoneIcon/>
                </button>
            </div>
        </div>
    )
}