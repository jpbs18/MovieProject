import styled from "styled-components";
import {theme} from "../../styles/theme";
const Input = styled.input`
  display:none;
  color: ${theme.secondaryTextColor};
  
  & + label span {
    display:inline-block;
    width:18px;
    height:18px;
    border-radius:50%;
    border:1.5px solid ${theme.secondaryTextColor};
    background:${theme.primaryBackgroundColor};
  }
  
  &:checked + label span {
    background-color:${theme.secondaryTextColor};
  }
`;

export {Input};