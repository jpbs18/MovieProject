import styled from "styled-components";

const Page = styled.main`
  height:100vh;
  max-width:100%;
  background:linear-gradient(109.6deg, rgba(10, 10, 10, 0.83) 100%, rgb(63, 61, 61) 100%), url("/images/MoviesBG.webp");
  background-size:cover;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  gap:30px;

  @media only screen and (max-width: 650px){
    gap:10px;
  }
`;

export {Page};