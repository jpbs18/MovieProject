import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Input = styled.input`
  display:none;
  color: ${theme.secondaryTextColor};
  
  & + label span {
    display:inline-block;
    width:18px;
    height:18px;
    border-radius:50%;
    border:1.5px solid ${theme.secondaryTextColor};
    background:${theme.primaryBackgroundColor};

    @media only screen and (max-width: 650px){
      width:16px;
      height:16px;
    }
  }
  
  &:checked + label span {
    background-color:${theme.secondaryTextColor};
  }
`;