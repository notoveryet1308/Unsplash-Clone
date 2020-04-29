import styled, {css} from 'styled-components';

export const ImageSubmitContainer = styled.div`
   position: relative;
   width: 91%;
   height: 80vh;
   margin: 6rem auto;
   background: white;
   border-radius: .5rem;
   ${props => props.imageTaken && css`
      overflow: scroll;
      .hide{
         display:none;
      }
      .imageTaken{
         height: 150px;
      }
      .moveUp{
         margin-top: -5rem;
      }
  `}
   /* box-shadow: 2px 2px 20px solid black; */
   
`
export const ImageInputFieldContainer = styled.div`
  position: relative;
  display: inline-block;
  width:96%;
  height: 60vh;
  margin: 1rem 2rem;
  border: 3px dashed rgba(230, 226, 226, 0.938);
  cursor: pointer;
  
  &:hover{
      background: #F5F5F5;
  }
`
export const InputFile = styled.input`
   position: relative;
   width: 100%;
   height: 100%;
   background: transparent;
   outline: none;
   z-index: 22;
   cursor:pointer;
   &::-webkit-file-upload-button {
    visibility: hidden;
}
`
export const TagInput = styled.input`
  width: 41rem;
  height: 3rem;
  padding: .2rem 1rem;
  font-size: 1.5rem;
  margin: 1rem 2rem;
`

export const ImageSubmitWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top:0;
   left:0;
   /* background: #333; */

`
export const InputFieldInformerImage = styled.img`
   width: 15rem;
   height: 10rem;
   margin: 1rem 0;
   
`
export const Ul = styled.ul`
margin-top: 5rem;
  position: relative;
  width: 100%;
  list-style-type: disc;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  li{
      text-decoration: none;
      color: #767676;
      font-size: 1.3rem;
      
  }

`
export const Button = styled.button`
    display: inline-block;
    width: 15rem;
    border: none;
    background: inherit;
    border: 1px solid #767676;
    border-radius: .5rem;
    font-size: 1.4rem;
   padding: .7rem;
   /* color: #fff; */
   cursor: pointer;
   margin-left:1rem;
`