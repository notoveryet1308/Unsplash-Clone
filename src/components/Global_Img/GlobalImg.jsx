import React, { useEffect } from 'react'
import { GlobalImageWrapper } from './style'
import { firestore } from '../../firebase/firebase.utils';
import { Container, Loading, SpanText } from '../../styles/globalStyle';
import { useDispatch , useSelector} from 'react-redux';
import { storeAllImages } from '../../Redux/imageReducer/imageAction';
import ImageGridPreview from './ImageGridPreview';

function GlobalImg() {
    const dispatch = useDispatch();
    const  imageStore =useSelector(state=> state.image.globalImages)
    useEffect(() => {
        async function getImages() {
            const imageRef = firestore.collection('images');
            const snapshot = await imageRef.get();
            snapshot.docs.map(img => dispatch(storeAllImages(img.data())))
        }
        getImages();

    }, [dispatch])

    return (
        <Container>
            <GlobalImageWrapper>
                {imageStore.length !== 0 ? <ImageGridPreview />: <Loading><div className='load' /> <SpanText>Loading</SpanText></Loading>}
            </GlobalImageWrapper>
        </Container>

    )
}

export default GlobalImg
