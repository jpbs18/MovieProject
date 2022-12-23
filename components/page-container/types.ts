import {ReactElement, ReactFragment} from "react";

export interface PageContainerProps{
    children: string | number | boolean | ReactElement | ReactFragment;
};