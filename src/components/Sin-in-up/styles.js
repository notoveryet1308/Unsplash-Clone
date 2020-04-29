import styled, {
   css
} from 'styled-components';


export const SignInUpWrapper = styled.div `
   width: 70%;
   margin: 7rem auto ;
   margin-bottom: 3rem;
   /* background: #333; */
   display: flex;
   flex-direction: column;
   align-items: center;
   form{
      width: 100%;
      display: flex;
      justify-content:flex-start;
      flex-direction: column;
      align-items:center;
   }
   @media (max-width:720px){
      width: 95%;
   }
`
export const InputLabel = styled.label `
display: inline-block;
  font-size: 1.5rem;
  color: #111;
  margin-bottom: .6rem;
  ${props=> props.warning && css`
    color:#E25C3D;
  `}

`
export const TakeInput = styled.input `
   font-size: 1.5rem;
   color: #111; 
   height: 3rem;
   padding: .6rem 1.2rem;
   border:1px solid #111;
   background: inherit;
   border-radius: .5rem;
   outline: none;
   /* width: 28rem; */
`
export const JoinButton = styled.button`
  width: 100%;
  height: 4.4rem;
  background: #000;
  color: white;
  text-align: center;
  border: none;
  padding: .4rem 0;
  font-size: 1.5rem;
  border-radius: .5rem;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 3rem;
`