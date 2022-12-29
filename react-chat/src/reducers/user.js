import { SET_AUTH } from "../constants/ActionTypes"

const initialState = {
    auth: false,
    user: 'anon',
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.payloda,
            }
        default:
            return state
    }
}