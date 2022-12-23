import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Progress = styled.div`
  width:220px;
  height:97px;
  border-radius:8px;
  background:${theme.primaryBackgroundColor};
  color:${theme.secondaryTextColor};
  display:flex;
  position:relative;
  flex-direction:column;
  align-items:center;
  text-align:center;
  margin-top:30px;

  @media only screen and (max-width: 650px){
    width:180px;
    height:80px;
    margin-top:15px;
  }
`;

export const Display = styled.div`
  display:flex;
  position:absolute;
  flex-direction:row;
  border-radius:8px;
  margin:0;
  gap:21px;
  top:55px;

  @media only screen and (max-width: 650px){
    top:50px;
  }
`;

export const Text = styled.p`
  margin:0;
  top:20px;
  position:absolute;
  text-transform:uppercase;
  font-weight:${theme.primaryFontWeight};
  font-size:19px;

  @media only screen and (max-width: 650px){
    top:15px;
    font-size:18px;
  }
`;