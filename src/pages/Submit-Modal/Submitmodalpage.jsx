import React from 'react'
import { ModalContainer } from './style'
import { BackButton, Container } from '../../styles/globalStyle';

import ImageSubmit from '../../components/Image-submit-box/ImageSubmit';
import { withRouter } from 'react-router-dom';

function Submitmodalpage({ history }) {
    return (

        <Container>
            <ModalContainer>
                <BackButton onClick={() => history.goBack()}>
                    <i className="fas fa-times"></i>
                </BackButton>
                <ImageSubmit />
            </ModalContainer>
        </Container>

    )
}

export default withRouter(Submitmodalpage);
