import styled from "styled-components";

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

export {Input};