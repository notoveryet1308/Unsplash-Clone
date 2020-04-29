import styled, {css} from 'styled-components';

export const LogoImg = styled.img `
  width: 3.2rem;
  height:3.2rem;
  margin: 1.4rem 1.2rem 1.5rem 2.5rem;
  ${props => props.biglogo && css`
    width: 7rem;
    height:7rem;
  `}
`
export const LogoHeader = styled.h1 `
  font-size: 1.5rem;
  color: #111111;
  text-transform: capitalize;
`
export const LogoSubText = styled.span `
  font-size: 1.3rem;
  color:  #111111;
  text-transform: capitalize;
`
export const WrapperFlex = styled.div `
  width:35%;
  display: flex;
  /* background:#333; */
  align-items: center;
  justify-content: flex-start;
  
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`