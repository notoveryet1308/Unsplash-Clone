import styled, {
  css
} from 'styled-components';

export const ProgressBar = styled.div `
  width:40rem;
  margin-left: 2rem;
  position: relative;
`
export const Image = styled.img `
  position: relative;
  width: 100%;
  height: auto;
  
`
export const TrackProgress = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  right: 0;
  background:rgba(226, 224, 224, 0.753);
  transition: all 300ms ease;
`
export const ButtonWrapper = styled.div `
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: .3rem 1rem; */
  background:rgb(250, 242, 238);
  margin: 1rem;
  border-radius: .2rem;
  cursor: pointer;
  z-index: 111;
  .fas{
        font-size: 2rem;
        color: #A2A6A4;
      }
  ${props=> props.downloadBtn && css`
    width: 5rem;  
  `}
  ${props=> props.collectBtn && css`
     width: 10rem;
     .fas{
       font-size: 1.5rem;
       margin: .5rem;
     }
  `}
  ${props => props.heartBtn && css`
  width: 5rem;  
  `}
  &:hover{
    background:#fff;
  }
`