import styled from 'styled-components';

export const ScrollableWrapper = styled.div `
  /* width: 200%; */
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  overflow-clip-box: padding-box;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  scroll-behavior: smooth;
  box-sizing: content-box;  
  /* background: #333; */
  margin-right: 4rem;
  &:after{
     content: '';
     position: absolute;
     top: 0;
     right: 0;
     display: block;
     width: 10rem;
     height:6rem;
     background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 95%,#fff);
  }

  &::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    
	background-color: rgb(255, 255, 255);
}

&::-webkit-scrollbar
{
	height: 0px;
	background-color: rgb(255, 255, 255);
}

&::-webkit-scrollbar-thumb
{
	background-color: #ffffff;
}


`

export const Shadow = styled.div `
 position: absolute;
 right: 0;
 width: 3rem;
 height: 6rem;
 background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 95%,#fff);
 z-index: -22;
`
export const ProvideTagWrapper = styled.div `
  position: relative;
  width: 40rem;
  height: 4rem;
  margin: 2rem;
`
export const TagInput = styled.input`
 width: 100%;
 height: 100%;
 border: 1px solid #eee;
 border-radius: 2px;
 background: inherit;
 padding: .2rem 1rem;
`