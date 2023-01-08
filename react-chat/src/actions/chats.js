import {
    GET_CHATS_FAILURE, GET_CHATS_REQUEST, GET_CHATS_SUCCESS,
} from "../constants/ActionTypes"


const getChatsStarted = () => ({
    type: GET_CHATS_REQUEST,
})

const getChatsSuccess = (chats) => ({
    type: GET_CHATS_SUCCESS,
    payloda: chats,
})

const getChatsFailure = (message) => ({
    type: GET_CHATS_FAILURE,
    payloda: message,
})

export const getChats = () => {
    return ((dispatch, getState) => {
        console.log('state', getState())
        dispatch(getChatsStarted())

        fetch("/chats")
            .then(res => res.json())
            .then(data => {
                dispatch(getChatsSuccess(data))
            })
            .catch(err => {
                console.log('error');
                dispatch(getChatsFailure(err.message))
            })
    })
}
