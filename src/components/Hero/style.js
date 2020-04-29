import styled from 'styled-components';
import hero from '../../assets/image/hero.jpg'
export const HeroWrapper = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
  background-image:linear-gradient(315deg, #0000004b 0%, #4141414b 74%), url(${hero});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`