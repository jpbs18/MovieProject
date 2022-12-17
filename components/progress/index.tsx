import {Progress, Display, Text} from "./styles";
import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {DisplayElement} from "../progress-element";
import {listOfOptions} from "../../assets/listOfOptions";

const MyProgress = () => {

    const {counter} = useContext(AppContext);

    return (
        <Progress>
            <Text>question {counter} of {listOfOptions.length}:</Text>
            <Display>
                {listOfOptions.map((element, index) => {
                    return <DisplayElement key={index + "element"} value={counter === index + 1}/>
                })}
            </Display>
        </Progress>
    );
};

export {MyProgress};