import React from "react";
import styles from './PageChatList.module.scss'
import ChatListHeader from "../../components/ChatListHeader/ChatListHeader";
import ChatList from "../../components/ChatList/ChatList";
import FloatButton from "../../components/FloatButton/FloatButton";

export function PageChatList() {
    return (
        <div className={styles.chat_layout}>
            <ChatListHeader />
            <ChatList />
            <FloatButton />
            {/* <a className={"google-oauth2-link"} href="http://localhost:8000/social-auth/login/google-oauth2/"> Login</a> */}
        </div>
    )
}