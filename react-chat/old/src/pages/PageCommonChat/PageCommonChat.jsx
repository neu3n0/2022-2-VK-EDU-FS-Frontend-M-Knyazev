import React, { useEffect, useState } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatContent from '../../components/ChatContent/ChatContent';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import './PageCommonChat.scss'
import { useParams } from "react-router";
import DoneAllIcon from '@mui/icons-material/DoneAll';



// const SomeFunctionalComponent = () => {
//     const [messages, setMessages] = useState([])
//     useEffect(() => {
//         fetch(`${API_URL}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setMessages(data.messages)
//             });
//     }, []);

// }

// const listChats = chats.map((chat) =>
//     <Link key={chat['chat']['id']} to={`chats/${chat['chat']['id']}`} style={{ textDecoration: 'none', color: '#333' }}>
//         <Dialogue chat={chat} chat_id={chat['chat']['id']} />
//     </Link>
// );

// const pollItems = () => {
//     fetch('https://tt-front.vercel.app/messages/')
//     .then(resp => resp.json())
//     .then(data => console.log(data));
// }

export default function PageCommonChat(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('https://tt-front.vercel.app/messages/')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMessages(data)
            });
    }, [])
    {/* <div key={message['_id']}> {message['text']}  {message['author']}</div> */}

    const messagesList = messages.map((message) =>
        <MessageCommon key={message['_id']} message={message} />
    );

    return (
        <div className="message-layout">
            <ChatHeader user={1111111} />
            {/* <ChatHeader chat_id={params['id']} />
            <ChatContent chat_id={params['id']} messages={mess}/>
            <ChatFooter chat_id={params['id']} sendMess={sendMess}/> */}
            <div className="content-chat">
                <div className="message-container">
                    {messagesList}
                </div>
            </div>
            <ChatFooter chat_id={1111111} sendMess={() => {console.log(1)}}/>
        </div>
    )
}


function MessageCommon(props) {
    let st = 'flex-end'; 
    if (props.message["author"] !== "me") {
        st = 'flex-start';
    } 

    return (
        <div className="message" style={{
            'justifyContent': st
        }}>
            <div className="message-wrap">
                <span className="message-text">
                    {props.message['text']}
                </span>

                <div className="message-meta">
                    <div className="message-status">
                        <DoneAllIcon className="done_all" style={{fontSize: '17px',  color: 'rgb(35, 182, 35)'}}/>
                    </div>
                    <div className="message-time">
                        {props.message['timestep']}
                    </div>
                </div>
            </div>
        </div>
    )
}