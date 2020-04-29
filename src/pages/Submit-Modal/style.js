import styled,{css} from 'styled-components';

export const ModalContainer = styled.div `
   position: fixed;
   top:0%;
   left:0%;
   width: 100%;
   height: 100vh;
   z-index:111;
   background: rgba(0, 0, 0, 0.7);
   ${props=> props.imgModal && css`
      z-index: 22112;
   `}
`