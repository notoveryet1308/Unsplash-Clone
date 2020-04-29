import React, {useEffect} from 'react'
import { firestore } from '../../firebase/firebase.utils';
import {useSelector, useDispatch} from 'react-redux';
import {storeCurrentUserImages} from '../../Redux/imageReducer/imageAction';

function UploadedImages() {
    const userId = useSelector(state => state.user.currentUser.id);
    const dispatch = useDispatch();
    useEffect(()=>{
        async function GetUploadedImages(){
            const uploadedImages = firestore.doc(`/users/${userId}`).collection('allImages');

            const snapshot = await uploadedImages.get();
            snapshot.docs.map(arr => dispatch(storeCurrentUserImages(arr.data().imgUrl))) 

        }
        GetUploadedImages();
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default UploadedImages;
