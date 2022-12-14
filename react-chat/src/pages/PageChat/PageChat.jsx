import React, { useContext, useState, useEffect } from "react";
import { CentrifugeContext } from "../../CentifugeContext"
import { useParams } from "react-router";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import ChatContent from "../../components/ChatContent/ChatContent";

import Cookies from 'js-cookie';

import styles from './PageChat.module.scss'

export function PageChat() {
    const { centrifugo } = useContext(CentrifugeContext)
    const params = useParams();
    const [mess, setMess] = useState([]);
    const [chat, setChat] = useState('');

    async function connect() {
        const updatedChat = await fetch("/chats/" + String(params['id']))
            .then(resp => resp.json())
        setMess(updatedChat['messages'])
        setChat(updatedChat['title'])
    }

    function subscribe() {
        console.log(centrifugo)
        const sub = centrifugo._subs['messages' + String(params['id'])];
        console.log(sub)
        sub.on('publication', function (neww) {
            setMess((newMess) => [neww.data, ...newMess]);
        });
    }
    useEffect(() => {
        connect() && subscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function sendMess(message) {
        fetch("/messages/create/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({
                "author": 1,
                "chat": params['id'],
                "text": message
            })
        }).then(resp => resp.json())
    }

    return (
        <div className={styles.messageLayout}>
            <ChatHeader chat={chat} />
            <ChatContent messages={mess} />
            <ChatFooter chat_id={params['id']} sendMess={sendMess} />
        </div>
    )
}