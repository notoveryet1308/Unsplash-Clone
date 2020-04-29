import React from 'react'
import { Container, HomepageWrapper } from '../../styles/globalStyle'
import WebHeader from '../../components/Header/Web/WebHeader';
import { withRouter } from 'react-router-dom';
import Submitmodalpage from '../Submit-Modal/Submitmodalpage';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import GlobalImg from '../../components/Global_Img/GlobalImg';
import ImageviewModal from '../Imageview-page/ImageviewModal';
function Homepage({ history }) {
    const user = useSelector(state => state.user)
    return (
        <Container>
            <WebHeader homepage />
            <HomepageWrapper>
                <Hero/>
                <GlobalImg/>
            </HomepageWrapper>

            {(history.location.search === '?modal')
                && (user.currentUser ? <Submitmodalpage /> : <Redirect to='/join' />)}
            {(history.location.search === '?photos') && <ImageviewModal/>}
        </Container>
    )
}

export default withRouter(Homepage);
