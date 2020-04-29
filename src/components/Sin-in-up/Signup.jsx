import React, { useState } from 'react';
import {  signupUsingEmailAndPassword } from '../../firebase/firebase.utils';
import { SignInUpWrapper, InputLabel, TakeInput, JoinButton } from './styles'
import { Container, JoinSplash, SpanText, Navlink, InputWrapper, FlexColWrapper } from '../../styles/globalStyle';
import GoogleJoin from '../Join-using-Google/GoogleJoin';
import { userLoggingFail } from '../../Redux/userReducer/userAction';
import { useDispatch, useSelector } from 'react-redux'
function Signup() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = `${firstname} ${lastname}`;
        console.log(displayName);
        try {
            await signupUsingEmailAndPassword(email, password, displayName);
        } catch (err) {
            dispatch(userLoggingFail(err.message));
        }
        setFirstname('');
        setLastname('');
        setEmail('');
        setUsername('');
        setPassword('');
    }
    return (
        <Container signup>
            <SignInUpWrapper>
                <JoinSplash>Join Unsplash</JoinSplash>
                <SpanText>Already a memeber? <Navlink to='/login' special='true'>Login</Navlink></SpanText>
                <GoogleJoin text='Join using Google' />
                <SpanText>OR</SpanText>
                <form onSubmit={handleSubmit}>
                    {error && <SpanText warning='true'>{error}</SpanText>}
                    <InputWrapper>
                        <FlexColWrapper>
                            <InputLabel>First name</InputLabel>
                            <TakeInput
                                type='text'
                                name='firstname'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                        </FlexColWrapper>
                        <FlexColWrapper >
                            <InputLabel>Last name</InputLabel>
                            <TakeInput
                                type='text'
                                name='lastname'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required

                            />
                        </FlexColWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <FlexColWrapper fullWidth>
                            <InputLabel>Email</InputLabel>
                            <TakeInput
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required

                            />
                        </FlexColWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <FlexColWrapper fullWidth>
                            <InputLabel>Username <SpanText grayish >(only letters, numbers, and underscores)</SpanText></InputLabel>
                            <TakeInput
                                type='text'
                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required

                            />
                        </FlexColWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <FlexColWrapper fullWidth>
                            <InputLabel>Password <SpanText grayish >(min 6 character)</SpanText></InputLabel>
                            <TakeInput
                                type='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required

                            />
                        </FlexColWrapper>
                    </InputWrapper>
                    <JoinButton type='submit'>Join</JoinButton>
                </form>
                <SpanText grayish>By joining, you agree to the Terms and Privacy Policy.</SpanText>
            </SignInUpWrapper>
        </Container>

    )
}

export default Signup
