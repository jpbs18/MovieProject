import styled from "styled-components";

const MyAdButton = styled.button`
  background: #EC5632;
  width: 600px;
  height: 83px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  font-weight: 700;
  font-size: 32px;
  text-decoration-line: none;
  text-transform: uppercase;

  &:hover {
    background: #ff3d11;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export {MyAdButton};