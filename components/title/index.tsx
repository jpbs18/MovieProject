import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {listOfOptions} from "../../assets/listOfOptions";
import {MainHeading} from "../sub-components";

const MyTitle = () => {

    const {counter} = useContext(AppContext);

    return <MainHeading text={listOfOptions[counter - 1]}/>
}

export {MyTitle};