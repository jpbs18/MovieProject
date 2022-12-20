import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createContext, useEffect, useState} from "react";
import {ContextType} from "./types";
import {json} from "../assets/database";
import {MyHead} from "../components";
import {listOfOptions} from "../utils/list-options";

const AppContext = createContext<ContextType>({
  movieState:{selected: json.movies, counter: 1, imdb: ""},
  setMovieState:() => null,
  isItOver:false,
  setIsItOver: () => null});

export default function App({ Component, pageProps }: AppProps) {

  const [movieState, setMovieState] = useState({selected: json.movies, counter: 1, imdb: ""});
  const [isItOver, setIsItOver] = useState<boolean>(false);

  useEffect(() => {

    if(sessionStorage.getItem("storage")){

      const data = JSON.parse(sessionStorage.getItem("storage") || "{}");
      setMovieState({...movieState, selected: data.selected, imdb: data.imdb, counter: data.counter});
      setIsItOver(data.isItOver);
    }
  },[])


  useEffect(() => {

    const dataStorage = {
      counter: movieState.counter,
      imdb: movieState.imdb,
      selected: movieState.selected,
      isItOver: movieState.counter > listOfOptions.length,
    }

    sessionStorage.setItem("storage", JSON.stringify(dataStorage));
  },[movieState.counter, movieState.imdb, movieState.selected])


    return (
      <AppContext.Provider value={{movieState, setMovieState, isItOver, setIsItOver}}>
        <MyHead/>
        <Component {...pageProps} />
      </AppContext.Provider>
  )
}

export {AppContext};

