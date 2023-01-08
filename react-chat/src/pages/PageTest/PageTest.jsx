import { useContext, useEffect, useState } from "react";
import { connect} from "react-redux";
import { getMessages } from "../../actions/messages";

import { CentrifugeContext } from "../../CentifugeContext"
import { Link } from "react-router-dom";

import Cookies from 'js-cookie';

function PageTest(props) {
    const { centrifugo } = useContext(CentrifugeContext)
    // const strre = useStore();
    // async function connect() {
    //     const updatedChat = await fetch("/chats/" + String(params['id']))
    //         .then(resp => resp.json())
    //     setMess(updatedChat['messages'])
    // }
    // console.log('mess:', mess)

    function subscribe() {
        const sub = centrifugo._subs['messages369'];
        console.log(sub)
        sub.on('publication', function (neww) {
            props.updateMessage(neww.data);
        });
    }
    useEffect(() => {
        props.getMessages('369');
        subscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // useEffect(() => {
    //     setInterval(() => props.getMessages('369'), 1000)
    // }, [])

    const [m, setM] = useState('');


    function handleSubmit(e) {
        e.preventDefault(); 
        console.log('t: ', m);
        fetch("/messages/create/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({
                "author": 1,
                "chat": '369',
                "text": m
            })
        }).then(resp => resp.json())
    }

    return (
        <>
            <Link to="/chats">
                <h1>Home</h1>
            </Link>

            <button onClick={() => props.getMessages('369')}>GetMessages</button>
            {
                props.loading && 'Loading'
            }
            <br></br>
            {
                props.messages && props.messages.length
                    ? props.messages.map(c => c.text).join(', ')
                    : <p>empty</p>
            }



            <form style={{ background: '#333' }} onSubmit={handleSubmit}>
                <input placeholder='Enter your text' onChange={(e) => setM(e.target.value)} />
            </form>
        </>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    loading: state.messages.loading,
})

export default connect(mapStateToProps, { getMessages })(PageTest)