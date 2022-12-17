import {Input} from "./style";
import {DisplayElementProps} from "./types";

const DisplayElement = (props: DisplayElementProps) => {

    return (
        <div>
            <Input type="radio" defaultChecked={props.value}/>
            <label><span></span></label>
        </div>
    )
};


export {DisplayElement};