import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from "react";
import {json} from "../assets/database";
import {MyHead} from "../components";
import {AppContext} from "./context";

export default function App({ Component, pageProps }: AppProps) {

  const [movieState, setMovieState] = useState({selected: json.movies, counter: 1, imdb: ""});
  const [isItOver, setIsItOver] = useState(false);

    return (
      <AppContext.Provider value={{movieState, setMovieState, isItOver, setIsItOver}}>
          <MyHead/>
          <Component {...pageProps} />
      </AppContext.Provider>
  )
}

export {AppContext};

