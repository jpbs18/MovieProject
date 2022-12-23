import {Page} from "./styles";
import {PageContainerProps} from "./types";
export const MyPage = (props: PageContainerProps) => {

    return <Page>{props.children}</Page>
};
