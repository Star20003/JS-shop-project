import { BoxProps } from "../../lib/Box/BoxProps";

export type TextFieldProps = | {
    children: BoxProps['children'] ;
    label? : HTMLElement | String;
} | any