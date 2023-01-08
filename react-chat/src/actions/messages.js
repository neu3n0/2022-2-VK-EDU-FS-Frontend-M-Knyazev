import {
    GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS,
} from "../constants/ActionTypes"


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

export const getMessages = (chat_id) => {
    return ((dispatch, getState) => {
        console.log('state', getState())
        dispatch(getMessagesStarted())

        fetch("/chats/" + chat_id)
            .then(res => res.json())
            .then(data => {
                dispatch(getMessagesSuccess(data))
            })
            .catch(err => {
                dispatch(getMessagesFailure(err.message))
            })
    })
}
