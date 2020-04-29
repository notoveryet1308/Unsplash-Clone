import React from 'react'
import { SubmitphotoWrapper } from './SubmitphotoStyle';
import { SpanText } from './../../styles/globalStyle';
import {withRouter} from 'react-router-dom';
function Submitphoto({history}) {
    return (
        <SubmitphotoWrapper onClick={()=> history.push(`${history.location.pathname}?modal`)}>
            <SpanText grayish='true'>Submit a photo</SpanText>
        </SubmitphotoWrapper>
    )
}

export default withRouter(Submitphoto)
