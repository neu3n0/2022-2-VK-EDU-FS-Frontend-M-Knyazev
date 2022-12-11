import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../Avatar/Avatar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './ChatHeader.module.scss'
import '../button.scss'


export default function ChatHeader({ chat }) {
    return (
        <div className={styles.headerChat}>
            <div className={styles.headerLeft}>
                <Link to="/">
                    <button className="button button-back">
                        <ArrowBackIcon />
                    </button>
                </Link>
                <div className={styles.chatInfo}>
                    <Avatar />
                    <ChatHeaderUserInfo chat={chat} />
                </div>
            </div>

            <div className={styles.headerRight}>
                <button className="button  button-find">
                    <SearchIcon />
                </button>
                <button className="button button-settings">
                    <MoreVertIcon />
                </button>
            </div>
        </div>
    )
}


function ChatHeaderUserInfo({ chat }) {
    return (
        <div className={styles.info}>
            <div className={styles.chatName}>
                <span className="kekw">
                    {chat === 1111111 ? 'commonChat' : chat}
                </span>
            </div>
            <div className={styles.chatStatus}>
                online
            </div>
        </div>
    )
}

