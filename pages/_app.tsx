import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createContext, useEffect, useState} from "react";
import {ContextType} from "./types";
import {json} from "../assets/database";
import {Movie} from "./types";
import {MyHead} from "../components";
import {listOfOptions} from "../utils/list-options";

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

  useEffect(() => {

    if(sessionStorage.getItem("storage") !== null){

      const data = JSON.parse(sessionStorage.getItem("storage") || "{}");
      setCounter(data.counter);
      setImdb(data.imdb);
      setSelected(data.selected);
      setIsItOver(data.isItOver);
    }
  },[])


  useEffect(() => {

    const dataStorage = {
      counter: counter,
      imdb: imdb,
      selected: selected,
      isItOver: counter > listOfOptions.length,
    }

    sessionStorage.setItem("storage", JSON.stringify(dataStorage));
  },[counter, imdb, selected])


    return (
      <AppContext.Provider value={{selected, setSelected, counter, setCounter, imdb, setImdb, isItOver, setIsItOver}}>
        <MyHead/>
        <Component {...pageProps} />
      </AppContext.Provider>
  )
}

export {AppContext};

