import {HeadingProps} from "../types";
import {Heading} from "./styles";

export const SecondaryHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
};