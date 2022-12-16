import styled from "styled-components";

const Disclaimers = styled.footer`
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

const Text = styled.a`
  color:#FFFFFF;
  font-weight:400;
  font-size:16px;
  opacity:0.3;
  text-decoration:none;
  cursor:default;
`;

export {Disclaimers, Text};