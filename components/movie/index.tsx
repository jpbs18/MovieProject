import {MovieProps} from "./types";
import {MovieImage, ImageContainer, Overlay} from "./style";


const MyMovie = (props: MovieProps) => {

    const {url, title, handleClick} = props;

    return(
        <ImageContainer>
            <MovieImage
                src={url}
                alt={title}
                width="204"
                height="300"
                onClick={handleClick}
                priority
            />
            <Overlay
                src={"/images/overlay.png"}
                alt={""}
                width={"204"}
                height={"300"}
                onClick={handleClick}
            />
        </ImageContainer>
    )
}

export {MyMovie};