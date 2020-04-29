import styled, {css} from 'styled-components';

export const GlobalImageWrapper = styled.div `
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  position: relative;
  /* background: #333; */

`
export const ImageGridWrapper = styled.div `
 /* display: flex; 
 flex: 1 1 1;  */
 /* grid-template-columns: 2rem [content-statrt img-1-start] 41.5rem [img-1-end] 2rem [img-2-start] 41.5rem [img-2-end] 2rem [img-3-start] 41.5rem [img-3-end content-end] 2rem; */
    display: grid;
    grid-template-columns:  repeat(3, minmax(300px, 41.5rem));
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    justify-content:center;
    grid-template-rows: auto;
    /* grid-template-rows: repeat(4, 10rem); */
    max-width: 90%;
    margin: 0 auto;
    margin-bottom:5rem;
    height: auto;
   
 
.img-1 {
    grid-column: img-1-start/img-1-end;
}

.img-2 {
    grid-column: img-2-start/img-2-end;
}

.img-3 {
    grid-column: img-3-start/img-3-end;
}
.img{
    position: relative;
}



`
export const IMAGE = styled.img `
   position: absolute;
   top: 50%;
   left:50%;
   transform: translate(-50% -50%);
   width: 40%;
   height: auto;
   margin-bottom: 1rem;
   object-fit: center;
`
export const ImageCover = styled.div `
  /* position: absolute;
  top: 0;
  left: 0; */
  cursor: zoom-in;
  width:100%;  
  height: 40rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .hideThis{
      display: none;
  }
  &:hover{
    .hideThis {
        display: flex;
    }
  }
`
export const ImageInfo = styled.div `
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  color: #000;
  ${props=> props.top && css`
      position: absolute;
      top:0;
      right: 0;
  `}
  ${props=> props.bottom && css`
      position: absolute;
      top: 350px;
     
  `}
`