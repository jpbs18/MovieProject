import {StaticImageData} from "next/image";

export interface MovieProps{
    url: string | StaticImageData,
    title: string,
    id:number,
    handleClick: () => void
}