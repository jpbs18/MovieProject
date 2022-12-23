import styled from "styled-components";
import {theme} from "../../../../styles/theme"
export const Heading = styled.h1`
  color:${theme.secondaryTextColor};
  font-weight:${theme.primaryFontWeight};
  font-size:32px;
  text-transform: uppercase;
  margin:10px 0 0 0;

  @media only screen and (max-width: 650px){
    font-size:28px;
  }
`;
