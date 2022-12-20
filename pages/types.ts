import {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";

interface MovieState{
    selected: Movie[],
    counter: number,
    imdb: string,
}

export interface ContextType{
    movieState: MovieState,
    setMovieState: Dispatch<SetStateAction<{ selected: Movie[]; counter: number; imdb: string; }>>,
    isItOver: boolean
    setIsItOver: Dispatch<SetStateAction<boolean>>
}

export interface Movie{
    imageUrl: string | StaticImageData,
    title: string,
    id: number,
    imdb: string,
    children:Movie[]
}




