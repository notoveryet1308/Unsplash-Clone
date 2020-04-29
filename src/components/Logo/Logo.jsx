import React from 'react'
import { WrapperFlex, LogoImg, LogoHeader, LogoSubText, TextWrapper } from './LogoStyle';
import logo from '../../assets/Logo/Symbol/Unsplash_Symbol.svg';

function Logo() {
    return (
        <WrapperFlex>
            <LogoImg src={logo} alt='logo-svg' />
            <TextWrapper>
                <LogoHeader>
                    Unsplash
                    </LogoHeader>
                <LogoSubText>
                    Photos for everyone
                   </LogoSubText>
            </TextWrapper>
        </WrapperFlex>
    )
}

export default Logo
