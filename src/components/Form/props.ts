import { BoxProps } from "../../lib/Box/BoxProps"

export type FormProps = | {
    parentChildren: BoxProps['children'] ;
    childChildren: BoxProps['children'] ;
    parentAttribute?: BoxProps['attribute'] ;
    childAttribute?: BoxProps['attribute'] ;
} | any