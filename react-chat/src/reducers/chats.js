import { GET_CHATS_FAILURE, GET_CHATS_REQUEST, GET_CHATS_SUCCESS } from "../constants/ActionTypes"

const initialState = {
    loading: false,
    chats: [],
    error: '',
}

let chats = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CHATS_SUCCESS:
            return {
                loading: false,
                chats: action.payloda,
                error: '',
            }
        case GET_CHATS_FAILURE:
            return {
                loading: false,
                chats: state.chats,
                error: action.payloda,
            }
        default:
            return state
    }
}

export default chats;