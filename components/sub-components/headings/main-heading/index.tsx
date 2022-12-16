import {HeadingProps} from "../types";
import {Heading} from "./styles";

const MainHeading = (props: HeadingProps) => {

    return <Heading>{props.text}</Heading>
}

export {MainHeading};