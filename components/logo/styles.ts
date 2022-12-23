import styled from "styled-components";
import {theme} from "../../styles/theme";
export const Logo = styled.div`
  color:${theme.logoColor};
  border:2px solid rgba(199, 44, 60, 0.6);
  border-radius:4px;
  width:187px;
  height:62px;
  background:rgba(0, 0, 0, 0.4);
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:60px;

  @media only screen and (max-width: 650px){
    width:157px;
    height:52px;
  }
`;

export const Text = styled.p`
  opacity:0.8;
  font-size:32px;
  font-weight:${theme.primaryFontWeight};

  @media only screen and (max-width: 650px){
    font-size:26px;
  }
`;