import styled, {
   createGlobalStyle,
   css,
   keyframes
} from 'styled-components';
import {
   Link
} from 'react-router-dom';
export const GlobalStyle = createGlobalStyle `
   *{
      margin: 0;
      padding: 0;
    
   }
   html{
      box-sizing: border-box;  
      font-size: 62.5%;
      font-family:'Roboto', sans-serif , 'Merriweather', serif; 
   }
`

const Load_animation = keyframes `
 {
    0% {
       transform: rotate(0deg);
    }
    100% {
       transform: rotate(360deg);
    }
 }

`

export const Container = styled.div `
   width: 100%;
   height: auto;
   position: relative;
   background: #fff;
 ${props => props.Tagcontainer && css`
   width: 100%;
   position: fixed;
   top: 6rem;
   left: 0; 
   display: flex;
 
   
 `}
 ${props=> props.imageView && css`
    .hideThis{
       display:none;
    }
    &:hover{
       .hideThis{
          display: flex;
       }
    }
 `}
   ${props => props.header && css`
     height: 6rem;
     position: fixed;
     top:0;
     bottom: 0;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     z-index: 1;
     
   `}
   ${props => props.signup && css`
     width:60%;  
     @media (max-width: 720px){
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
     }  
   `}
   ${props => props.profile && css`
       width: 100px;
       margin: 0 3rem;
   `}
   ${props => props.signin && css`
     width:49%;
     margin: 2rem auto;
     padding: 2rem 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     form{
        width: 100%;
     }
    
     @media (max-width:720px) {
        width: 90%;
     }
   `}
`
export const TextWrapper = styled.div `
   display:inline-block;
   margin: 0 2rem;
   ${props => props.signup && css`
      background: #3CB46E ;
      width: 180px;
      color:#fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .8rem 0;
      border-radius: 5px;
   
   `}
`
export const Navlink = styled(Link)
`
   white-space:nowrap;   
   color:#767676;
   font-size: 1.3rem;
   text-decoration:none;
   ${props => props.signuplink && css`
      color: #fff;
   `}
   ${props => props.special && css`
      text-decoration: underline;
   `}
   ${props=> props.taglink && css`
     font-size: 1.5rem;
     
   `}
   ${props=> props.taglink_2 && css`
       margin: 0 .5rem;
       display: inline-block;
       font-size: 1.5rem;
   `}
`
export const VerticalDivider = styled.div `
   height: 3rem;
   margin: 0 2rem;
   width: 2px;
   background-color: #CAC9C8 ;
   ${props => props.another && css`
     margin: 0 2rem;
     width: 4px;
   `}
`
export const JoinSplash = styled.h4 `
  font-size: 4.6rem;
  margin-bottom: 1.6rem;
  color: #111;
  @media (max-width:720px){
     font-size: 3rem;
  }
`
export const SpanText = styled.span `
  /* display:inline-block; */
  
  font-size: 1.5rem;
  color: #111;
  cursor:pointer;
  ${props => props.white && css`
    color: white;
  `}
  ${props => props.collect && css`
    color:#A2A6A4;
    margin: .5rem;
  `}
  ${props=> props.heroSpan && css`
    color: #fff;
    margin: 2rem 0;
  `}
  ${props => props.grayish && css`
    color: #767676;
    font-size: 1.3rem;
  `}
  ${props => props.warning && css`
     color: red;
     border: 1px solid #EC7063;
     background: inherit;
     padding: 1rem 2rem;
     border-radius: .5rem;
  `}
  ${props => props.imageuploaded && css`
     color: #0AD353;
     border: 1px solid #7AFEAA;
     background: inherit;
     padding: .5rem 2rem;
     border-radius: .5rem;
     font-size: 2rem;
  `}
`
export const InputWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
 
`
export const FlexColWrapper = styled.div `
  width:48%;
  display: flex;
  justify-content:flex-start;
  flex-direction: column;
  /* background:#333; */
  margin: 1.5rem 0;
  ${props => props.fullWidth && css`
     width: 100%;
  `}
  ${props => props.profilePage && css`
    margin: 0;
    align-items: center;
  `}
  ${props => props.uploadInfo && css`
   /* background:#333; */
   width: 100%;
   justify-content: center;
   align-items: center;
   margin: 8rem 0;
   margin-bottom: 3rem;
  
  `}
  ${props => props.showUploadInfo && css`
    width: 70%;
    margin: 0 auto;
    /* background:#333; */
  
  `}
  ${props => props.hero && css`
     width: 65%;
  `}
`
export const FlexWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  align-self: center;
  /* background: #333; */
  ${props => props.profile && css`
     width: 22rem;
     z-index: -1;
  `}
  ${props => props.simpleTag && css`
     width: 13rem;
     padding: 1rem 0 1rem 2.5rem;
     /* background: #333; */
     height: 4rem;
  `}
  ${props => props.imagesubmit && css`
     width: 98%;
     height: 4rem;
     margin: 0 auto;
     justify-content: space-between;
     /* background: #333; */
  `}
  ${props => props.imagesubmitButton && css`
     width: 84%;
     height: 4rem;
     margin: 0 auto;
     justify-content: flex-end;
     /* background: #eee; */
     .imageUploaded{
        background-color: #0CD127;
        cursor: pointer;
        color: #fff;
     }
     .imageNotUploaded{
        background-color: #767676;
        cursor: not-allowed;
        color: #F0ECEB;
     }
  `}
   

`
export const SignuppageWrapper = styled.div `
  width:100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width:720px){
     flex-direction: column;
     overflow: hidden;
  }
`
export const H1Text = styled.h1 `
 color: #fff;
 margin-bottom: 1.6rem;
 font-size: 4.8rem;
 ${props => props.Colorblack && css`
   color: #000;
   font-size: 2.4rem;
   margin: 1.5rem 0;
 `}
 ${props => props.profileName && css`
   color: #000;
   font-size: 4rem;
   
 `}
 @media (max-width: 720px){
    font-size:3rem;
 }
`
export const H2Text = styled.h2 `
 color: #fff;
 margin-bottom: 1.6rem;
 font-size: 2.4rem;
 @media (max-width:720px){
    font-size: 1.8rem;
 }
`
export const Paragraph = styled.p `
 color: #fff;
 font-size: 1.5rem;
 margin: 2rem 0;
 ${props => props.photoText && css`
   margin-bottom: 9rem;
 `}
 ${props => props.medium && css`
   font-size: 1.8rem;
   margin: .5rem 0;
 
 `}
`

export const Loading = styled.div `
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content:center;
   align-items: center;
   flex-direction: column;
   .load {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      border: 1rem solid gray;
      background: inherit;
      border-top: 1rem solid #111;
      animation: ${Load_animation} 2s linear infinite;
   }

`
export const BackButton = styled.div `
   width: 50px;
   height: 50px;
   position: absolute;
   top:1rem;
   left: 1rem;
   background: transparent;
   display: flex;
   justify-content: center;
   align-items:center;
   cursor:pointer;
   .fas{
      color: rgba(238, 235, 235, 0.938);
      font-size: 3rem;
   }
`

export const LinkWrapper = styled.div `
  /* width:200px; */
  display: block; 
  height: 100%;
  /* background: #eee; */
  text-align: center;
  padding: 0 .5rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.editorial && css`
     padding: 1rem;
  `}
  
`

export const HomepageWrapper = styled.div`
width: 100%;
position: absolute;
top:12rem;
left: 0;
/* background: #333; */
z-index: -1;

`