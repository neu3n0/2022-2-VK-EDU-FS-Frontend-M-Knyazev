import React, { useState, useEffect } from "react";
// import { CentrifugeContext } from "../../CentifugeContext"
import { useParams } from "react-router";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import ChatContent from "../../components/ChatContent/ChatContent";

import styles from './PageChat.module.scss'

import { connect } from "react-redux";
import { getMessages } from "../../actions/messages";
import Cookies from 'js-cookie';


function PageChat(props) {
    const params = useParams();
    const [chat, setChat] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => props.getMessages(String(params['id'])), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [params, props]);

    useEffect(() => {
        if (props.messages[0]) {
            setChat(props.messages[0].chat_title);
        }
    }, [props.messages]);

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
            <ChatContent messages={props.messages} />
            <ChatFooter chat_id={params['id']} sendMess={sendMess} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    loading: state.messages.loading,
})

export default connect(mapStateToProps, { getMessages })(PageChat)

// function PageChat(props) {
//     const { centrifugo } = useContext(CentrifugeContext)
//     const params = useParams();
//     const [mess, setMess] = useState([]);
//     const [chat, setChat] = useState('kek');

//     async function connect() {
//         // const updatedChat = await fetch("/chats/" + String(params['id']))
//         //     .then(resp => resp.json())
//         // setMess(updatedChat['messages'])
//         props.getMessages(String(params['id']));
//         // setChat(updatedChat['title'])
//     }
//     // console.log('mess:', mess)

//     // function subscribe() {
//     //     console.log('checker');
//     //     console.log(centrifugo);
//     //     // const sub = centrifugo.newSubscription('messages' + String(params['id']));
//     //     // sub.subscribe();
//     //     const sub = centrifugo._subs['messages' + String(params['id'])];
//     //     console.log(sub)
//     //     sub.on('publication', function (neww) {
//     //         props.updateMessage(neww.data);
//     //         // setMess((newMess) => [neww.data, ...newMess]);
//     //     });
//     // }

//     useEffect(() => {
//         // console.log('checker3');
//         connect();
//         // subscribe();
//         const sub = centrifugo._subs['messages' + String(params['id'])];
//         console.log(sub)
//         sub.on('publication', function (neww) {
//             console.log('wtf', props.messages);
//             props.updateMessage(neww.data);
//         });
//         return () => {
//             console.log(1111111111111);
//             sub.on('leave', function () {
//                 console.log('123');
//             });
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     console.log('messages:_ ', props.messages)

//     function sendMess(message) {
//         props.sendMessage(message, params['id']);
//         // fetch("/messages/create/", {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Accept': 'application/json',
//         //         'X-CSRFToken': Cookies.get('csrftoken'),
//         //     },
//         //     body: JSON.stringify({
//         //         "author": 1,
//         //         "chat": params['id'],
//         //         "text": message
//         //     })
//         // }).then(resp => resp.json())
//     }


//     return (
//         <div className={styles.messageLayout}>
//             <ChatHeader chat={chat} />
//             <ChatContent messages={props.messages} />
//             <ChatFooter chat_id={params['id']} sendMess={sendMess} />
//         </div>
//     )
// }

// const mapStateToProps = (state) => ({
//     messages: state.messages.messages,
//     loading: state.messages.loading,
// })

// export default connect(mapStateToProps, { updateMessage, sendMessage, getMessages })(PageChat)
