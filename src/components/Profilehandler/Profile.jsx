import React from 'react'
import { Container } from '../../styles/globalStyle'
import {ProfileWrapper, Img} from './style';
import profileDummypic from '../../assets/image/L-p-pic.jpg';
import {withRouter} from 'react-router-dom';

function Profile({history, bigPic}) {
   
    return (
        <Container profile='true' onClick={()=> history.push(`/profile`) }>
            <ProfileWrapper bigPic={bigPic}>
                <Img src={profileDummypic} alt='profile-small-image'/>
            </ProfileWrapper>
        </Container>
    )
}

export default withRouter(Profile);
