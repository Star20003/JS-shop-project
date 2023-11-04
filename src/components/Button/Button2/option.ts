import { Box } from "../../../lib/Box/Box"
import { optionProps } from "./props"


export const option = (props: optionProps) => {
    const {icon,text, ...restprops} = props
    return Box({
        element: 'Button',
        attribute: {
            class: 'flex flex-col items-center'
        },
        children: [
            Box({
                element: 'div',
                attribute:{
                    ...restprops,
                    class: restprops.class + 'w-11 h-11 rounded-xl flex justify-center items-center'
                },
                children: 
                icon &&
                Box({
                    element: 'img',
                    attribute:{
                        src: props.icon,
                    },
                    children: ''
                })
            }),
            text &&
            Box({
                element: 'span',
                attribute: {
                    ...props.attribute,
                    class: 'mt-2 ff-Nunito text-sm text-grey text-neutral-400',
                },
                children: text
            })
        ]
    })
}