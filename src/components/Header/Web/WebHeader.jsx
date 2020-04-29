import React from 'react'
import { Container, Navlink, TextWrapper, VerticalDivider, SpanText } from '../../../styles/globalStyle'
import Logo from '../../Logo/Logo'
import Searchbox from '../../Searchbox/Searchbox'
import Submitphoto from '../../Submit-photo/Submitphoto'
import { useSelector } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';
import Profile from '../../Profilehandler/Profile';
import { withRouter } from 'react-router-dom';
import TagContainer from '../../Tags/TagContainer'

function WebHeader({ history, homepage }) {
    const user = useSelector(state => state.user);
    return (


        <Container >
            <Container header >
                <Logo />
                <Searchbox />
                <TextWrapper>
                    <Navlink to='/collections'>Collections</Navlink>
                </TextWrapper>
                <TextWrapper>
                    <Navlink to='/explore'>Explore</Navlink>
                </TextWrapper>
                <Submitphoto />
                <VerticalDivider another='true' />

                {user.currentUser ? <SpanText grayish='true' onClick={() => auth.signOut()}>Logout</SpanText> :
                    <TextWrapper>
                        <Navlink to='/login'>Login</Navlink>
                    </TextWrapper>}
                {user.currentUser ? <Profile /> :
                    <TextWrapper signup>
                        <Navlink to='/join' signuplink='true'>Join free</Navlink>
                    </TextWrapper>
                }
            </Container>
            {homepage && <TagContainer />}
        </Container>


    )
}


export default withRouter(WebHeader);
