import {createContext} from "react";
import {ContextType} from "./types";
import {json} from "../assets/database";

export const AppContext = createContext<ContextType>({
    movieState:{selected: json.movies, counter: 1, imdb: ""},
    setMovieState:() => null,
    isItOver:false,
    setIsItOver: () => null});