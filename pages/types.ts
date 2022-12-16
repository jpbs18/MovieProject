import {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";

export interface ContextType{
    selected: Movie[] | undefined,
    setSelected: Dispatch<SetStateAction<Movie[] | undefined>>,
    counter: number,
    setCounter: Dispatch<SetStateAction<number>>,
    imdb: string,
    setImdb: Dispatch<SetStateAction<string>>,
    isItOver: boolean,
    setIsItOver: Dispatch<SetStateAction<boolean>>
}

export interface Movie{
    imageUrl: string | StaticImageData,
    title: string,
    id: number,
    imdb: string,
    children:Movie[]
}




