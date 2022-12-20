import {MovieProps} from "./types";
import {MovieImage, ImageContainer, Overlay} from "./style";


const MyMovie = (props: MovieProps) => {

    const {url, title, handleClick} = props;

    return(
        <ImageContainer>
            <MovieImage
                src={url}
                alt={title}
                width="200"
                height="291"
                onClick={handleClick}
                priority
            />
            <Overlay
                src={"/images/overlay.png"}
                alt={""}
                width={"200"}
                height={"291"}
                onClick={handleClick}
                loading={"lazy"}
            />
        </ImageContainer>
    )
}

export {MyMovie};