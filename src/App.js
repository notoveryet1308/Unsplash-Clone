/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { Container, Loading, SpanText } from './styles/globalStyle';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Home-page/Homepage';
import SignUppage from './pages/Sign-up-page/SignUppage';
import SignInpage from './pages/Sign-in-page/SignInpage';
import { setCurrentUser, userLoggingFail} from './Redux/userReducer/userAction';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Profilepage from './pages/Profile-page/Profilepage';
import {ProtectedProfileRoute} from './utilities/Protected.routes';

function App() {
  const [firebaseInitialized, setFirebase] = useState(false);
  const user = useSelector(state => state.user); 
  const dispatch = useDispatch();
  useEffect(()=>{
        try{
          auth.onAuthStateChanged(async (user)=>{
            console.log('__onAuthStateChanged__')
            if(user){
              const {userRef, firebaseInitialized} = await createUserProfileDocument(user);
              userRef.onSnapshot(snapshot =>{
                dispatch(setCurrentUser({id: snapshot.id, ...snapshot.data()}));
              })
              setFirebase(firebaseInitialized);
            }else{
              dispatch(setCurrentUser(user));
            setFirebase(true);
            }
          })
        }catch(err){
          dispatch(userLoggingFail(err));
        }
  }, []);
  return (
    <Container>
        <Switch>
          <Route exact path='/' render={()=> firebaseInitialized? <Homepage/>: <Loading><div className='load' /> <SpanText>Loading</SpanText></Loading>} />
          <Route exact path='/join' render={()=> user.currentUser ? <Redirect to='/'/> : <SignUppage/> }/>
          <Route exact path='/login' render={()=>user.currentUser ? <Redirect to='/'/>: <SignInpage/> }/>
          <ProtectedProfileRoute eaxct path='/profile'  component={Profilepage}/>
        </Switch>
    </Container>
  );
}


export default App;
