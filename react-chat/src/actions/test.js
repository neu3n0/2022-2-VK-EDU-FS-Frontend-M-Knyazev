import axios from "axios"
import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from "../constants/ActionTypes"

const getMessagesStarted = () => ({
    type: GET_MESSAGES_REQUEST,
})

const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payloda: messages,
})

const getMessagesFailure = (message) => ({
    type: GET_MESSAGES_FAILURE,
    payloda: message,
})

export const getMessages = () => {
    return ((dispatch, getState) => {
        console.log('state', getState())
        dispatch(getMessagesStarted())

        const updatedChat = fetch("/chats/97")
            .then(res => res.json())
            .then(data => {
                console.log('data:', data)
                dispatch(getMessagesSuccess(data))
            })
            .catch(err => {
                console.log(1111111)
                dispatch(getMessagesFailure(err.message))
            })
    })
}

// axios
// .get('http://tt-front.vercel.app/prepods')
// .then((res) => {
//     dispatch(getMessagesSuccess(res))
// })
// .catch(err => {
//     console.log(1111111 )
//     dispatch(getMessagesFailure(err.message))
// })