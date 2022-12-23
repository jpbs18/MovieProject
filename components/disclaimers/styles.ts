import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Disclaimers = styled.footer`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position:fixed;
  bottom:25px;
  gap:30px;
  left:50%;
  transform:translateX(-50%);
`;

export const Text = styled.a`
  color:${theme.primaryBackgroundColor};
  font-weight:${theme.fourthFontWeight};
  font-size:16px;
  opacity:0.3;
  text-decoration:none;
  cursor:default;
  
  @media only screen and (max-width: 650px){
    font-size:14px;
  }
`;