import styled from "styled-components";

const Progress = styled.div`
  width:220px;
  height:97px;
  border-radius:8px;
  background:#FFFFFF;
  color:#22DAA8;
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

const Input = styled.input`
  display:none;
  color: #22DAA8;
  
  & + label span {
    display:inline-block;
    width:18px;
    height:18px;
    border-radius:50%;
    border:1.5px solid #22DAA8;
    background-color:#FFFFFF;
  }
  
  &:checked + label span {
    background-color:#22DAA8;
  }
`;

const Text = styled.p`
  margin:0;
  top:20px;
  position:absolute;
  text-transform:uppercase;
  font-weight:700;
  font-size:19px;
`;

export {Progress, Display, Input, Text};