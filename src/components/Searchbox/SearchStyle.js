import styled, {
  css
} from 'styled-components';

export const SearchboxWrapper = styled.div `
  width:100%;
  height:4rem;
  background: #eee;
  display: flex;
  align-items: center;
  border-radius: 35px;
  form{
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .fas{
    font-size: 1.5rem;
    color: #CDC9C8;
    padding: 1rem 2rem;
   }
  }
  
 
  ${props => props.heroSearch && css`
     width: 100%;
     height: 5rem;
     border-radius: .3rem;
     background: #eee;
     margin-top: 2rem;
     
      form{
        .fas{
       font-size: 2rem;
      }
      }
  `}
`
export const SimpleWrapper = styled.div `
  display: inline-block;
`