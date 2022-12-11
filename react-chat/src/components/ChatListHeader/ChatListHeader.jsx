import React from 'react'
import '../button.scss'
import { Link } from 'react-router-dom'
import styles from './ChatListHeader.module.scss'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function ChatListHeader(props) {
    return (
        <div className={styles.headerChat}>
            <div className={styles.headerLeft}>
                <Link to="profile">
                    <button className="button button-menu">
                        <MenuIcon/>
                    </button>
                </Link>
                <div className={styles.messengerInfo}>
                    Kitty Messenger
                </div>
            </div>
            <div className={styles.headerRight}>
                <button className="button  button-find">
                    <SearchIcon/>
                </button>
            </div>
        </div>


    )
}