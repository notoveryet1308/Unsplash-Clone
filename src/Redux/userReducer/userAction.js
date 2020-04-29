import {userActionTypes} from '../constants';

export const userLogging = ()=>({
    type:userActionTypes.userLoggging
})
export const setCurrentUser = user=>({
    type: userActionTypes.userLogged,
    payload: user
})

export const userLoggingFail = err=>({
    type: userActionTypes.userLogingFail,
    payload: err
})
