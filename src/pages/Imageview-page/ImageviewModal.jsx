import React from 'react';
import { ImageModalContainer, ImageModalWrapper, ModalImage } from './style';
import { withRouter } from 'react-router-dom';
import { BackButton } from '../../styles/globalStyle';
import { useSelector, useDispatch } from 'react-redux';
import {currentModalImage} from '../../Redux/imageReducer/imageAction';
function ImageviewModal({ history }) {
    const modalImg = useSelector(state => state.image.currentModalImage);
    const dispatch = useDispatch();
    return (
        <ImageModalContainer>
            <BackButton onClick={() => {
                dispatch(currentModalImage(null))
                history.goBack()
            }}>
                <i className="fas fa-times"></i>
            </BackButton>
            <ImageModalWrapper>
                <ModalImage src={modalImg} alt='---' />
            </ImageModalWrapper>
        </ImageModalContainer>
    )
}

export default withRouter(ImageviewModal);
