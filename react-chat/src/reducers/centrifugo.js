import { CENTRIFUGO_CONNECT, CENTRIFUGO_DISCONNECT } from "../constants/ActionTypes"

const initialState = {
    load: false,
    centrifugo: null,
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CENTRIFUGO_CONNECT:
            return {
                ...state,
                auth: action.payloda,
            }
        case CENTRIFUGO_DISCONNECT:
            return {
                ...state,
                auth: action.payloda,
            }
        default:
            return state
    }
}