import styled from "styled-components";
import {theme} from "../../styles/theme";
const Progress = styled.div`
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
`;

const Display = styled.div`
  display:flex;
  position:absolute;
  flex-direction:row;
  border-radius:8px;
  margin:0;
  gap:21px;
  top:55px;
`;

const Text = styled.p`
  margin:0;
  top:20px;
  position:absolute;
  text-transform:uppercase;
  font-weight:${theme.primaryFontWeight};
  font-size:19px;
`;

export {Progress, Display, Text};