import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { CentrifugeContext } from "./CentifugeContext"
import { Centrifuge } from 'centrifuge'


import { PageChat, PageChatList, PageProfile, PageCommonChat } from './pages'


function App() {

    const [centrifugo, setCentrifugo] = useState(null);
    const [chats, setChats] = useState([]);
    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        description: '',
    });
    const [load, setLoad] = useState(false);

    async function getChats() {
        await fetch("/chats/")
            .then(resp => resp.json()).then(data => { setChats(data); })
        setLoad(true);
    }

    async function getUser() {
        await fetch("/users/1/")
            .then(resp => resp.json()).then(data => { setUser(data); })
    }

    function subscribe() {
        const sub = centrifugo.newSubscription('chats');
        sub.subscribe();
        chats.forEach(element => {
            const sub = centrifugo.newSubscription('messages' + String(element.chat.id));
            sub.subscribe();
        });
    }

    useEffect(() => {
        const centrifugo = new Centrifuge('ws://localhost:9000/connection/websocket');
        centrifugo.connect();
        setCentrifugo(centrifugo);
        getChats();
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        load && subscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load]);

    console.log('centr: ', centrifugo, '\nchats: ', chats, '\nuser: ', user)
    if (centrifugo && chats && user) {
        return (
            <div className="App">
                <HashRouter>
                    <CentrifugeContext.Provider value={{ centrifugo, chats }}>
                        <Routes>
                            <Route path="/" exact element=<PageChatList /> />
                            <Route path="chats/:id" element=<PageChat /> />
                            <Route path="profile" element=<PageProfile user={user} setUser={setUser} /> />
                            <Route path='chats/commonChat' element={<PageCommonChat />} />
                        </Routes>
                    </CentrifugeContext.Provider>
                </HashRouter>
            </div>
        );
    }
    else {
        <h2>loading</h2>
    }
}

export default App;