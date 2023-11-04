import {Box} from '../../../lib/Box/Box'
import {ButtonProps} from './props'

export const Button = (props : ButtonProps ) => {
    return Box({
        element: 'button',
        attribute: {
            ...props.parentAttribute,
            class: props.parentAttribute.class + 'flex justify-center items-center black-1 btn-shadow'
        },
        children: Box({
            element: 'span',
            attribute: {
                class: props.childAttribute.class + 'text-white text-lg font-semibold',
            },
            children: props.children
        })
    })
}