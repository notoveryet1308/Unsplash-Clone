import React from 'react'
import { JoinUsingGoogle} from './styles';
import { SpanText } from '../../styles/globalStyle';
import {signInWithGoogle} from '../../firebase/firebase.utils';
function GoogleJoin({text}) {
    return (
        <JoinUsingGoogle onClick={signInWithGoogle}>
            <i className="fab fa-google"></i>
            <SpanText white>{text}</SpanText>
        </JoinUsingGoogle>
    )
}

export default GoogleJoin;
