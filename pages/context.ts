import {createContext} from "react";
import {AppContextType} from "./types";
import {json} from "../assets/database";

export const AppContext = createContext<AppContextType>({
    movieState:{selected: json.movies, counter: 1, imdb: ""},
    setMovieState:() => null,
    isItOver:false,
    setIsItOver: () => null});