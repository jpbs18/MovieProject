import {HeadingProps} from "../types";
import {Heading} from "./styles";

const PrimaryHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
}

export {PrimaryHeading};