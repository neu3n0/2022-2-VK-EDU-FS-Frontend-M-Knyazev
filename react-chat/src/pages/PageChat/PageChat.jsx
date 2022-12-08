import React, { useEffect, useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageChat.scss'
import { useParams } from "react-router";
import { Centrifuge } from 'centrifuge';


export default function PageChat(props) {


    const params = useParams();

    const [mess, setMess] = useState([]);
    const [user, setUser] = useState([]);
    const [centrifugo, setCentrifugo] = useState(null)


    async function connect() {
        const updatedMess = await fetch("/chats/" + String(params['id']))
            .then(resp => resp.json())
        console.log(updatedMess)
        setMess(updatedMess['messages'])
        setUser(updatedMess['title'])
        const centrifugo = new Centrifuge('ws://localhost:9000/connection/websocket');
        centrifugo.connect()
        setCentrifugo(centrifugo)
    }

    function subscribe() {
        const sub = centrifugo.newSubscription('messages')
        sub.subscribe()
        sub.on('publication', function (neww) {
            setMess((newMess) => [neww.data, ...newMess])
        });

        // sub.on('publication', (ctx) => {
        //     setMess((prev) => [ctx.data, ...prev])
        // })
    }

    useEffect(() => { connect() }, [])
    useEffect(() => { centrifugo && subscribe() }, [centrifugo])


    console.log(mess)
    
    async function sendMess(message) {
        const updatedMess = await fetch("/api/todo2/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": "123",
            })
        }).then(resp => (console.log(resp), resp.json()))
        // if (message === '') return;
        // const messages_container = localStorage.getItem('messages');
        // let messages = JSON.parse(messages_container);
        // const new_id = messages[params['id']][messages[params['id']].length - 1]['id'] + 1;
        // let user = "me";
        // if (message[0] === '/') {
        //     user = "kek";
        //     message = message.slice(1);   
        // }
        // const message_ = {
        //     "id": new_id,
        //     "author_username": user,
        //     "author_id": 2,
        //     "chat_title": "chatOne",
        //     "text": message,
        //     "pub_date": "11:12",
        //     "is_readed": false,
        //     "count_readers": 0,
        //     "edited": false
        // };
        // messages[params['id']].push(message_);
        // localStorage.setItem("messages", JSON.stringify(messages));
        // setMess(messages);
    }

    return (
        <div className="message-layout">

            <ChatHeader user={user} />
            <ChatContent messages={mess} />
            <ChatFooter chat_id={params['id']} sendMess={sendMess} />
        </div>
    )
}


// export const sendMessageToChat = async (access_token, chat_id, body) => {
//     const response = await fetch(`${API_URL}/api/messages/${chat_id}/`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             Authorization: 'Bearer ' + access_token,
//             'Content-Type': 'application/json'
//         }
//     })
//     return await response.json()
// }