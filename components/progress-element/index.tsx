import {Input} from "./style";
import {DisplayElementProps} from "./types";

export const DisplayElement = (props: DisplayElementProps) => {

    return (
        <div>
            <Input type="radio" defaultChecked={props.value}/>
            <label><span></span></label>
        </div>
    )
};