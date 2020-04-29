import styled, {css} from 'styled-components';

export const ProfileWrapper = styled.div`
  
   width: 3.2rem;
   height: 3.2rem;
   border-radius: 50%;
   overflow: hidden;
   cursor: pointer;
   
`
export const Img = styled.img`
 width: 100%;
 height:100%;
 ${props=> props.bigPic && css`
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
   `}
`