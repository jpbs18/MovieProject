import {MoviesContainer} from "./style";
import {useContext} from "react";
import {AppContext} from "../../pages/_app";
import {MyMovie} from "../movie";
import {Movie} from "../../pages/types";

const MyMoviesContainer = () => {

    const {movieState, setMovieState, isItOver, setIsItOver} = useContext(AppContext);

    const handleClick = (imdb: string, id: number) => {
        const movieSelected = movieState.selected?.filter((movie) => movie.id === id)[0];
        setMovieState({...movieState, selected: movieSelected?.children, counter: movieState.counter + 1, imdb: imdb });
        setIsItOver(movieState.selected?.some(movies => movies.children.length == 0) ? !isItOver : isItOver);
    }

    return(
        <MoviesContainer>
            {movieState.selected?.map((movie: Movie, index: number) => {
                return <MyMovie key={index + "-" + movie.title}
                                url={movie.imageUrl} title={movie.title} id={movie.id}
                                handleClick={() => handleClick(movie.imdb, movie.id)}/>
            })}
        </MoviesContainer>
    )
}

export {MyMoviesContainer};