import styled from "styled-components";

const Logo = styled.div`
  color:#C72C3C;
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
`;

const Text = styled.p`
  opacity:0.8;
  font-size:32px;
  font-weight:700;
`;

export {Logo, Text};