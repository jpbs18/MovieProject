import {AppContext} from "../../pages/_app";
import {useContext} from "react";
import {json} from "../../assets/database";
import {MainHeading} from "../sub-components";

const MyTitle = () => {

    const {counter} = useContext(AppContext);

    return <MainHeading text={json.listOfOptions[counter - 1]}/>
}

export {MyTitle};