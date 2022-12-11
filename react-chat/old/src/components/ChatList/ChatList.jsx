import React, { useContext, useEffect, useState } from 'react'
import Dialogue from '../../components/Dialogue/Dialogue';
import './ChatList.scss'
import { Link } from 'react-router-dom'
// import { Centrifuge } from 'centrifuge';
import { CentrifugoProvider } from '../../context/websocket';

export default function ChatList(props) {
    const [chats, setChats] = useState([])
    // const [centrifugo, setCentrifugo] = useState(null)
    const centrifugo = useContext(CentrifugoProvider)

    console.log("1", centrifugo);

    async function connect() {
        const updatedChats = await fetch("/chats/")
            .then(resp => resp.json())
        setChats(updatedChats)
    }

    function subscribe() {
        const sub = centrifugo.newSubscription('chat')
        sub.subscribe()
        sub.on('publication', function(neww) {
            setChats((newChats) => [neww.data, ...newChats])
        });
    }

    console.log(chats)

    useEffect(() => { connect() }, [])
    useEffect(() => { centrifugo && subscribe() }, [centrifugo])

    let listChats = chats.map((chat) =>
        <Link key={chat['chat']['id']} to={`${chat['chat']['id']}`} style={{ textDecoration: 'none', color: '#333' }}>
            <Dialogue chat={chat} />
        </Link>
    );

    return (
        <div className="chats-list">
            <div className="chats-container">
                {listChats}
                <Link to={'chats/commonChat'} style={{ textDecoration: 'none', color: '#333' }}>
                    <button className='common-chat'>
                        common-chat
                    </button>
                </Link>
            </div>
        </div>
    )
}