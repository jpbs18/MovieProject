import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {MainHeading} from "../sub-components";
import {listOfOptions} from "../../utils/list-options";

const MyTitle = () => {

    const {counter} = useContext(AppContext);

    return <MainHeading text={listOfOptions[counter - 1]}/>
}

export {MyTitle};