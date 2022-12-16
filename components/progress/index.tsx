import {Progress, Display, Text, Input} from "./styles";
import {AppContext} from "../../pages/_app";
import {useContext} from "react";

const MyProgress = () => {

    const {counter} = useContext(AppContext);

    return (
        <Progress>
            <Text>question {counter} of 3:</Text>
            <Display>
                <div>
                    <Input type="radio" defaultChecked={counter === 1}/>
                    <label><span></span></label>
                </div>

                <div>
                    <Input type="radio" defaultChecked={counter === 2}/>
                    <label><span></span></label>
                </div>

                <div>
                    <Input type="radio" defaultChecked={counter === 3}/>
                    <label><span></span></label>
                </div>
            </Display>
        </Progress>
    );
};

export {MyProgress};