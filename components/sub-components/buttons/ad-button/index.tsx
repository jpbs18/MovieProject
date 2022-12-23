import {Button} from "./styles";
import {AdButtonProps} from "./types";

export const AdButton = (props: AdButtonProps) => {

    return <Button>{props.text}</Button>
}