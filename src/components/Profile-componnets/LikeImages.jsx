import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import { setLikedImages } from '../../Redux/imageReducer/imageAction';
import { ImagesContainer, ImageBox, Image } from './style';
import {UnlikeButtonBox} from '../ImageProgressBar/SmallStuff';
function LikeImages() {
    const userId = useSelector(state => state.user.currentUser.id);
    const dispatch = useDispatch();
    const likedImages = useSelector(state => state.image.likedImageByUser);
    
    useEffect(() => {
        async function GetLikedImages() {
            const LikeImageRef = firestore.doc(`/users/${userId}`).collection('liked-images');

            const snapshot = await LikeImageRef.get();
            snapshot.docs.map(arr => dispatch(setLikedImages(arr.data())))

        }
        GetLikedImages();
    }, [])

    
    return (
        <ImagesContainer>
            {likedImages.map(img => <ImageBox>
                <Image src={img.imgUrl} alt={img.imgName} />
                <UnlikeButtonBox/>
            </ImageBox>)}
        </ImagesContainer>
    )
}

export default LikeImages

// style={{ color: `${fav ? '#F14710' : ' #A2A6A4'}` }}