import styled from 'styled-components';

export const ProfileActivityWrapper = styled.div `
  position: relative;
  width: 100%;
  .active{
      /* background: #333; */
      color: #000;
      border-bottom: 2px solid #000;
  }
  /* margin: 2rem; */

`
export const ProfileActivityButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;
  padding: 1rem .2rem;
  margin: 0 1.8rem;
 
  font-size: 1.5rem;
  background: inherit;
  border: none;
  cursor:pointer;
  outline: none;
  .fas{
      margin: 1rem;
  }
  

`
export const ImagesContainer = styled.div `
  width: 80%;
  margin: 5rem auto;
  position: relative;
  display: grid;
  grid-template-columns:  repeat(3, minmax(300px, 41.5rem));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  justify-content:center;
  grid-template-rows: auto;
`

export const ImageBox = styled.div`
  width: 100%;
  position: relative;
  
`
export const Image = styled.img`
  width: 100%;
  height: 30rem;
`
export const UnlikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 242, 238);
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: .6rem;
  width: 4rem;
  border-radius: .2rem;
  cursor: pointer;
  .fas{
    font-size: 2rem;
    /* color: #F14710; */
  }
`