import styled from "styled-components";

export const MoviesContainer = styled.ul`
  display:flex;
  flex-direction:row;
  list-style:none;
  gap:40px;
  padding:0;
  
  @media only screen and (max-width: 650px){
    gap:15px;
    flex-direction:column;
  }
`;