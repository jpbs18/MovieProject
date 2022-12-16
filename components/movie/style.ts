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
`;
const Overlay = styled.img`
  border-radius:10px;
  cursor:pointer;
  position:absolute;
  z-index:0;
  
  &:hover{
    z-index:1;
  }
`;

export {MovieImage, ImageContainer, Overlay};