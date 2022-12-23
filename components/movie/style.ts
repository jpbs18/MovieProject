import styled from "styled-components";
import Image from "next/image";


const ImageContainer = styled.li`
  position:relative;
  display:flex;
`;

const MovieImage = styled(Image)`
  border-radius:10px;
  cursor:pointer;
  z-index:1;
  
  &:hover{
    z-index:0;
  }

  @media only screen and (max-width: 800px){
    width:170px;
    height:250px;
  }

  @media only screen and (max-width: 650px){
    width:200px;
    height:160px;
  }
`;
const Overlay = styled(Image)`
  border-radius:10px;
  cursor:pointer;
  position:absolute;
  z-index:0;
  
  &:hover{
    z-index:1;
  }

  @media only screen and (max-width: 800px){
    width:170px;
    height:250px;
  }

  @media only screen and (max-width: 650px){
    width:200px;
    height:160px;
  }
`;

export {MovieImage, ImageContainer, Overlay};