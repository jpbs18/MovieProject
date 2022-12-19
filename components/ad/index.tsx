import {AdContainer, ButtonLink} from "./styles";
import {useContext} from "react";
import {AppContext} from "../../pages/_app";
import {AdButton, PrimaryHeading, SecondaryHeading} from "../sub-components";


const MyAd = () => {

    const {imdb} = useContext(AppContext);

    return(
        <AdContainer>
            <PrimaryHeading text={"Watch new movies for free!"}/>
            <SecondaryHeading text={"Watch any movies online for free without ads!"}/>
            <SecondaryHeading text={"Have fun watching your favourite movies!"}/>
            <ButtonLink href={imdb} target={"_blank"} prefetch={false}>
                <AdButton text={"Watch here!"}/>
            </ButtonLink>
        </AdContainer>
    )
}

export {MyAd};