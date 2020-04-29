import React from 'react';
import { SignuppageWrapper } from '../../styles/globalStyle';
import Signup from '../../components/Sin-in-up/Signup';
import Photo from '../../components/PhotoHolder/Photo';
function SignUppage() {
    return (
        <SignuppageWrapper>
            <Photo />
            <Signup />
        </SignuppageWrapper>


    )
}

export default SignUppage;