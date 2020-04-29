import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { ImageGridWrapper, ImageCover, ImageInfo } from './style';
import { Container } from '../../styles/globalStyle';
import { DownloadButton, CollectButton, HeartButton } from './../ImageProgressBar/SmallStuff';
import { currentModalImage } from '../../Redux/imageReducer/imageAction';
import { withRouter } from 'react-router-dom';

function ImageGridPreview({ history }) {
    const dispatch = useDispatch();
    const imageStore = useSelector(state => state.image.globalImages);

    return (
        <ImageGridWrapper>
            {imageStore.map((i, p) =>
                <Container imageView='true' key={uuid()} >
                    <ImageCover style={{ backgroundImage: `url(${i.imgUrl})` }}
                        onClick={() => {
                            dispatch(currentModalImage(i.imgUrl));
                            history.push(`${history.location.pathname}?photos`)
                        }}>
                    </ImageCover>
                    <ImageInfo className='hideThis' top='true'>
                        <HeartButton imgUrl={i.imgUrl} imgName={i.imgName}/>
                        <CollectButton />
                    </ImageInfo>
                    <ImageInfo className='hideThis' bottom='true'>
                        <DownloadButton />
                    </ImageInfo>
                </Container>
            )}
        </ImageGridWrapper>
    )
}

export default withRouter(ImageGridPreview)
