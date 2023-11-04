import { BoxProps } from "../../../lib/Box/BoxProps"

export type ButtonProps = {
    children: BoxProps['children'] ;
    parentAttribute?: BoxProps['attribute'] ;
    childAttribute?: BoxProps['attribute'] ;
}