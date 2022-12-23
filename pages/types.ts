import {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";

interface MovieState{
    selected: Movie[] | undefined,
    counter: number,
    imdb: string,
}

export interface Movie{
    imageUrl: string | StaticImageData,
    title: string,
    id: number,
    imdb: string,
    children:Movie[]
}

export interface AppContextType{
    movieState: MovieState,
    setMovieState: Dispatch<SetStateAction<{ selected: Movie[]; counter: number; imdb: string; }>>,
    isItOver: boolean
    setIsItOver: Dispatch<SetStateAction<boolean>>
}






