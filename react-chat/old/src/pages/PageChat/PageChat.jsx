import React, { useEffect, useState, useContext } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'
import { useParams } from "react-router";
// import { Centrifuge } from 'centrifuge';
import Cookies from 'js-cookie';
import { CentrifugoProvider } from '../../context/websocket';


export default function PageChat(props) {


    const params = useParams();

    const [mess, setMess] = useState([]);
    const [user, setUser] = useState([]);
    // const [centrifugo, setCentrifugo] = useState(null)
    const centrifugo = props.centrifugo

    console.log('a', centrifugo)

    async function connect() {
        const updatedMess = await fetch("/chats/" + String(params['id']))
            .then(resp => resp.json())
        console.log(updatedMess)
        setMess(updatedMess['messages'])
        setUser(updatedMess['title'])
        // const centrifugo = new Centrifuge('ws://localhost:9000/connection/websocket');
        // centrifugo.connect()
        // setCentrifugo(centrifugo)
    }

    function subscribe() {
        console.log("INNNNN")
        const sub = centrifugo.newSubscription('messages')
        sub.subscribe()
        sub.on('publication', function (neww) {
            setMess((newMess) => [neww.data, ...newMess])
        });
    }

    useEffect(() => {
        connect()
        // return () => { centrifugo.disconnect() };
    }, []);
    useEffect(() => { 
        centrifugo && subscribe();
        // return () => { centrifugo.disconnect() };
    }, [centrifugo])


    console.log(mess)
    console.log(user)

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
        <div className="message-layout">

            <ChatHeader user={user} />
            <ChatContent messages={mess} />
            <ChatFooter chat_id={params['id']} sendMess={sendMess} />
        </div>
    )
}