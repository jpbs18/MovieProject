import {HeadingProps} from "../types";
import {Heading} from "./styles";

const SecondaryHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
}

export {SecondaryHeading};