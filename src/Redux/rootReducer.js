import {combineReducers} from 'redux';
import userReducer from './userReducer/userReducer';
import imageReducer from './imageReducer/imageReducer';

const rootReducer = combineReducers({
    user: userReducer,
    image: imageReducer
})

export default rootReducer;