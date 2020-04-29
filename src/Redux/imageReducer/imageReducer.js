import {
    imageActionTypes
} from '../constants';

const INITIAL_DATA = {
    currentUserImages: [],
    globalImages: [],
    err:null,
    currentModalImage: null,
    likedImageByUser: []
    
}
const imageReducer = (state= INITIAL_DATA, action) => {
    switch (action.type) {
        case imageActionTypes.storeImages:
            return {
                ...state,
                globalImages: [...state.globalImages, action.payload],
                err: null
            }
        case imageActionTypes.currentuserImages:
            return{
                ...state,
                currentUserImages: [...state.currentUserImages, action.payload],
                err: null
            }
        case imageActionTypes.imageFetchingFailed:
            return{
                ...state,
                err : action.payload
            }
        case imageActionTypes.setCurrentModalImage:
            return{
                ...state,
                currentModalImage: action.payload
            }
        case imageActionTypes.setLikedImage:
            return {
                ...state,
                likedImageByUser: [...state.likedImageByUser, action.payload]
            }
        case imageActionTypes.updateCurrentuserImage:
            return{
                ...state,
                currentUserImages:[action.payload]
            }
            default:
                return state
    }
}

export default imageReducer;