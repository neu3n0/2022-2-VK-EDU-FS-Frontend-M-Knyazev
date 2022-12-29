import { CENTRIFUGO_CONNECT, CENTRIFUGO_DISCONNECT } from "../constants/ActionTypes"

const setConnect = () => ({
    type: CENTRIFUGO_CONNECT,
})

const setDisconnect = () => ({
    type: CENTRIFUGO_DISCONNECT,
})

export const setCentrifugo = (flag) => {
    return ((dispatch, getState) => {
        console.log('state', getState())
        flag ? dispatch(setConnect()) : dispatch(setDisconnect())
    })
}