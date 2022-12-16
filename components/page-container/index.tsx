import {Page} from "./styles";
import {PageContainerProps} from "./types";
const MyPage = (props: PageContainerProps) => {

    return <Page>{props.children}</Page>
}

export {MyPage}