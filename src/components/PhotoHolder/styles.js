import styled from 'styled-components';
import signUp from '../../assets/image/signup-page.jpg';

export const PhotoContainer = styled.div `
  position: fixed;
  top:0;
  left:0;
  width:35%;
  height:100vh;
  overflow: hidden;
  background-image: url(${signUp});
  background-position: center;
  background-size: cover;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 720px){
    position: relative;
    width: 100%;
    height: 60vh;
    padding: 1rem;
  }
`