import {ImagesContainer} from "./style";
import {useContext} from "react";
import {AppContext} from "../../pages/_app";
import {MyMovie} from "../movie";
import {Movie} from "../../pages/types";

const MyMoviesContainer = () => {

    const {counter, setCounter, selected, setSelected, setImdb, isItOver, setIsItOver} = useContext(AppContext);
    const handleClick = (imdb: string, id: number) => {
        const movieSelected = selected?.filter((movie) => movie.id === id)[0];
        setCounter(counter + 1);
        setIsItOver(selected?.some(movies => movies.children.length == 0) ? !isItOver : isItOver);
        setImdb(imdb);
        setSelected(movieSelected?.children);
    }

    return(
        <ImagesContainer>
            {selected?.map((movie: Movie, index: number) => {
                return <MyMovie key={index + "-" + movie.title}
                                url={movie.imageUrl} title={movie.title} id={movie.id}
                                handleClick={() => handleClick(movie.imdb, movie.id)}/>
            })}
        </ImagesContainer>
    )
}

export {MyMoviesContainer};