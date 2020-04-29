import React from 'react';
import { PhotoContainer } from './styles';
import { LogoImg } from '../Logo/LogoStyle';
import { FlexColWrapper, H1Text, H2Text, Paragraph } from '../../styles/globalStyle';
import logowhite from '../../assets/image/logo-white.svg'
function Photo() {
    return (
        <PhotoContainer>
            <LogoImg src={logowhite} />
            <FlexColWrapper fullWidth>
                <H1Text>
                    Creation starts here
                </H1Text>
                <H2Text>
                    Access 1,632,090 free, high-resolution photos you can’t find anywhere else
                </H2Text>
            </FlexColWrapper>
            <Paragraph photoText>Uploaded 8 months ago by Tom Rumble</Paragraph>
        </PhotoContainer>
    )
}

export default Photo
