import styled from "styled-components";
import {theme} from "../../../../styles/theme";
export const Heading = styled.h1`
  margin:20px 0 0 0;
  font-weight:${theme.secondaryFontWeight};
  font-size:34px;
  text-align:center;
  color:${theme.primaryTextColor};

  @media only screen and (max-width: 800px){
    font-size:29px;
  }
  
  @media only screen and (max-width: 650px){
    font-size:24px;
  }
`;