import React from 'react';
import { Container, FlexWrapper, FlexColWrapper, H1Text, SpanText } from '../../styles/globalStyle';
import WebHeader from '../../components/Header/Web/WebHeader';
import { ProfilePageWrapper, EditProfile } from './pageStyle';
import { Img } from '../../components/Profilehandler/style';
import profiledummypic from '../../assets/image/L-p-pic.jpg';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Submitmodalpage from '../Submit-Modal/Submitmodalpage';
import ProfileActivity from '../../components/Profile-componnets/ProfileActivity';


function Profilepage({history}) {
    const user = useSelector(state => state.user);
    console.log(user.currentUser.displayName)

    return (
        <Container>
            <WebHeader />
            <ProfilePageWrapper>
                <FlexWrapper profile='true'>
                    <Img bigPic='true' src={profiledummypic} alt='profile-dummy-pic' />
                </FlexWrapper>
                <FlexColWrapper profilePage>
                    <FlexWrapper>
                        <H1Text profileName='true'>{user.currentUser.displayName}</H1Text>
                        <EditProfile><SpanText>Edit profile</SpanText></EditProfile>
                    </FlexWrapper>
                    <SpanText>Download free, beautiful high-quality photos curated by Rahul.</SpanText>
                </FlexColWrapper>
            </ProfilePageWrapper>
            <ProfileActivity/>
            {history.location.search === '?modal' && <Submitmodalpage/> }           
        </Container>
    )
}

export default withRouter(Profilepage);
