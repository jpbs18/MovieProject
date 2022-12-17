import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createContext, useState} from "react";
import {ContextType} from "./types";
import {json} from "../assets/database";
import {Movie} from "./types";
import {MyHead} from "../components";

const AppContext = createContext<ContextType>({
  selected: json.movies, setSelected: () => null,
  counter: 1, setCounter: () =>  null,
  imdb: "", setImdb: () => null,
  isItOver:false, setIsItOver: () => null});

export default function App({ Component, pageProps }: AppProps) {

  const [selected, setSelected] = useState<Movie[] | undefined>(json.movies);
  const [counter, setCounter] = useState<number>(1);
  const [imdb, setImdb] = useState<string>("");
  const [isItOver, setIsItOver] = useState<boolean>(false);

  return (
      <AppContext.Provider value={{selected, setSelected, counter, setCounter, imdb, setImdb, isItOver, setIsItOver}}>
        <MyHead/>
        <Component {...pageProps} />
      </AppContext.Provider>
  )
}

export {AppContext};

