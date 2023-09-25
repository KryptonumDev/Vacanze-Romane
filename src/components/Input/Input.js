import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--grey, #E0E0E0);
  background: var(--white, #FEFEFE);
  padding: 16px 32px;
  width: 100%;
  margin-top: 24px;


  color: #000000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &::placeholder{
    color: var(--grey-1, #808080);
  }

  &:hover, &:active{
    background: var(--bg-home, #FEFBF5);
  }
`