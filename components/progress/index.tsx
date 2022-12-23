import {useContext} from "react";
import {DisplayElement} from "../progress-element";
import {AppContext} from "../../pages/_app";
import {listOfQuestions} from "../../utils/list-options";
import {Progress, Display, Text} from "./styles";

export const MyProgress = () => {

    const {movieState} = useContext(AppContext);

    return (
        <Progress>
            <Text>question {movieState.counter} of {listOfQuestions.length}:</Text>
            <Display>
                {listOfQuestions.map((element, index) => {
                    return <DisplayElement key={index + "-element"} value={movieState.counter === index + 1}/>
                })}
            </Display>
        </Progress>
    );
};
