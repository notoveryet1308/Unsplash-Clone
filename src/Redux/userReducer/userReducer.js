import {
    userActionTypes
} from '../constants';
const INITIAL_STATE = {
    userLogging: null,
    currentUser: null,
    error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.userLoggging:
            return {
                ...state,
                userLogging: true,
                error: null,
            
            };
        case userActionTypes.userLogged:
            return {
                ...state,
                currentUser: action.payload,
                    userLogging: false,
                    
            };
        case userActionTypes.userLogingFail:
            return {
                ...state,
                currentUser: null,
                    error: action.payload,
                    userLogging: false,
                    

            };
        default:
            return state;
    }
}
export default userReducer;