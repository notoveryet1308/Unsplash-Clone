import styled, {css} from 'styled-components';

export const InputField = styled.input`
  width: 100%;
  height:3.8rem;
  padding:.5rem;
  color: #111;
  border: none;
  background: inherit;
  font-size: 1.3rem;
  outline:none;
  ${props=> props.heroSearch && css`
     font-size: 1.5rem;
  `}
`
