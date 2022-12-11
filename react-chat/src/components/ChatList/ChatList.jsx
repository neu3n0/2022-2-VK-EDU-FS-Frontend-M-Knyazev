import React, { useContext } from 'react'
import { CentrifugeContext } from "../../CentifugeContext"
import Dialogue from '../Dialogue/Dialogue';
import { Link } from 'react-router-dom'
import styles from './ChatList.module.scss'

export default function ChatList() {
    const { chats } = useContext(CentrifugeContext);
    
    let listChats = chats && chats.map((chat) =>
        <Link key={chat['chat']['id']} to={`chats/${chat['chat']['id']}`} style={{ textDecoration: 'none', color: '#333' }}>
            <Dialogue chat={chat} />
        </Link>
    );

    const commonChat = {
        chat: {
            title: "commonChat"
        },
        last_message: {
            text: 'lasttest',
            pub_date: 'now',
        }
    }

    return (
        <div className={styles.chatList}>
            <div className={styles.chatContainer}>
                {listChats}
                <Link key={1111111} to={'chats/commonChat'} style={{ textDecoration: 'none', color: '#333' }}>
                    <Dialogue chat={commonChat} />
                </Link>
            </div>
        </div>
    )
}