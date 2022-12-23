import {useContext} from "react";
import {MainHeading} from "../sub-components"
import {AppContext} from "../../pages/_app";
import {listOfQuestions} from "../../utils/list-options";

export const MyTitle = () => {

    const {movieState} = useContext(AppContext);

    return <MainHeading text={listOfQuestions[movieState.counter - 1]}/>
}
