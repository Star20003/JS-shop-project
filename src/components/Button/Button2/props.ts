import { BoxProps } from "../../../lib/Box/BoxProps";

export type optionProps = | {
    attribute: BoxProps['attribute']
    icon?: string;
    text?: string
} | any