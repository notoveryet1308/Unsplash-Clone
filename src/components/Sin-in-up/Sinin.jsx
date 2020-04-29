import React from 'react'
import { Container, H1Text, SpanText, FlexColWrapper, Navlink } from '../../styles/globalStyle';
import { LogoImg } from '../Logo/LogoStyle';
import logoBlack from '../../assets/Logo/Symbol/Unsplash_Symbol.svg';
import JoinUsingGoogle from '../Join-using-Google/GoogleJoin';
import { InputLabel, TakeInput, JoinButton } from './styles'
function Sinin() {
    return (
        <Container signin>
            <LogoImg src={logoBlack} alt='Logo' biglogo='true' />
            <H1Text Colorblack>Login</H1Text>
            <SpanText>Welcome back</SpanText>
            <JoinUsingGoogle text='Login with Facebook' login />
            <SpanText>OR</SpanText>
            <form>
                <FlexColWrapper fullWidth>
                    <InputLabel>Email</InputLabel>
                    <TakeInput type='email' required />
                </FlexColWrapper>
                <FlexColWrapper fullWidth>
                    <InputLabel>Password</InputLabel>
                    <TakeInput type='password' required />
                </FlexColWrapper>
                <JoinButton type='submit'>Login</JoinButton>
            </form>
            <SpanText>Don't have a accout? <Navlink to='/join' special='true'>Join</Navlink></SpanText>
        </Container>
    )
}

export default Sinin;
