import {Progress, Display, Text} from "./styles";
import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {DisplayElement} from "../progress-element";
import {json} from "../../assets/database";

const MyProgress = () => {

    const {counter} = useContext(AppContext);

    return (
        <Progress>
            <Text>question {counter} of {json.listOfOptions.length}:</Text>
            <Display>
                {json.listOfOptions.map((element, index) => {
                    return <DisplayElement key={index + "-element"} value={counter === index + 1}/>
                })}
            </Display>
        </Progress>
    );
};

export {MyProgress};