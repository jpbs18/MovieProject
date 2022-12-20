import {Progress, Display, Text} from "./styles";
import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {DisplayElement} from "../progress-element";
import {listOfOptions} from "../../utils/list-options";

const MyProgress = () => {

    const {movieState} = useContext(AppContext);

    return (
        <Progress>
            <Text>question {movieState.counter} of {listOfOptions.length}:</Text>
            <Display>
                {listOfOptions.map((element, index) => {
                    return <DisplayElement key={index + "-element"} value={movieState.counter === index + 1}/>
                })}
            </Display>
        </Progress>
    );
};

export {MyProgress};