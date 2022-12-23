import {HeadingProps} from "../types";
import {Heading} from "./styles";

export const PrimaryHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
};