import {imageActionTypes} from '../constants';


export const storeAllImages = images=>({
    type: imageActionTypes.storeImages,
    payload: images
});

export const storeCurrentUserImages = images =>({
    type: imageActionTypes.currentuserImages,
    payload: images
});

export const imageFetchingFailed = err=> ({
    type: imageActionTypes.imageFetchingFailed,
    payload: err
});

export const currentModalImage = imgUrl =>({
    type: imageActionTypes.setCurrentModalImage,
    payload: imgUrl
});

export const setLikedImages = imgURL =>({
    type: imageActionTypes.setLikedImage,
    payload: imgURL
});

export const updateCurrentUserImage = updatedImages =>({
   type: imageActionTypes.currentUserUpdateImage,
   payload: updatedImages
});