import { SET_AUTH  } from "../constants/ActionTypes"

const setLogin = (flag) => ({
    type: SET_AUTH,
    payloda: flag,
})

export const setAuth = (flag) => {
    return ((dispatch, getState) => {
        console.log('state', getState())
        dispatch(setLogin(flag))
    })
}