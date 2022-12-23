import styled from "styled-components";
import Link from "next/link";

export const AdContainer = styled.div`
  width:684px;
  height:364px;
  border-radius:10px;
  border:10px solid #61D6B6;
  background:#FFFFFF;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:30px;
  align-items:center;
  margin-top:120px;

  @media only screen and (max-width: 800px){
    width:584px;
  }

  @media only screen and (max-width: 650px){
    width:454px;
    height:300px;
    gap:20px;
  }
`;

export const ButtonLink = styled(Link)`
  margin-top:6px;
`;