import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from "../constants/ActionTypes"

const initialState = {
    loading: false,
    messages: [],
    check: false,
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_MESSAGES_SUCCESS:
            return {
                loading: false,
                messages: action.payloda.messages,
                error: '',
            }
        case GET_MESSAGES_FAILURE:
            return {
                loading: false,
                messages: state.messages,
                error: action.payloda,
            }
        default:
            return state
    }
}