import styled from "styled-components";
import {theme} from "../../../../styles/theme";
const MyAdButton = styled.button`
  background: ${theme.buttonColor};
  width: 600px;
  height: 83px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${theme.primaryTextColor};
  font-weight: ${theme.primaryFontWeight};
  font-size: 32px;
  text-decoration-line: none;
  text-transform: uppercase;

  &:hover {
    background: ${theme.buttonColorOnHover};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export {MyAdButton};