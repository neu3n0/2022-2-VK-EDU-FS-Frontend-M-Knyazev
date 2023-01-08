import React, { useEffect } from 'react'
import Dialogue from '../Dialogue/Dialogue';
import { Link } from 'react-router-dom'
import styles from './ChatList.module.scss'

import { getChats } from '../../actions/chats';
import { connect } from "react-redux";

function ChatList(props) {
    
    useEffect(() => {
        const intervalId = setInterval(() => props.getChats(), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [props]);
    
    let listChats = props.chats && props.chats.map((chat) =>
        <Link key={chat['chat']['id']} to={`${chat['chat']['id']}`} style={{ textDecoration: 'none', color: '#333' }}>
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
                <Link key={1111111} to={'commonChat'} style={{ textDecoration: 'none', color: '#333' }}>
                    <Dialogue chat={commonChat} />
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    chats: state.chats.chats,
    loading: state.chats.loading,
})

export default connect(mapStateToProps, { getChats })(ChatList)
