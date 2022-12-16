import { MyAdButton } from "./styles";
import {AdButtonProps} from "./types";

const AdButton = (props: AdButtonProps) => {

    return <MyAdButton>{props.text}</MyAdButton>
}

export {AdButton};