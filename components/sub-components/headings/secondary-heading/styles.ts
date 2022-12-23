import styled from "styled-components";
import {theme} from "../../../../styles/theme"
export const Heading = styled.h1`
  font-weight:${theme.tertiaryFontWeight};
  font-size:24px;
  color:${theme.tertiaryTextColor};
  margin:0;

  @media only screen and (max-width: 650px){
    font-size:18px;
  }
`;