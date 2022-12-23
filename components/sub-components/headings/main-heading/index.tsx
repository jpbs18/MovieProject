import {HeadingProps} from "../types";
import {Heading} from "./styles";

export const MainHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
};