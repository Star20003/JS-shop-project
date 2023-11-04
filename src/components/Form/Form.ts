import {Box} from '../../lib/Box/Box'
import { FormProps } from './props'

export const Form = (props: FormProps) => {
    return Box({
        element: 'form',
        attribute:{
            ...props.parentAttribute,
            class: props.parentAttribute.class + 'mt-6 bg-white shadow-xl border rounded-sm'
        },
        children: [ 
            Box({
                element: 'div',
                attribute:{
                    class: 'flex flex-col'
                },
                children: props.parentChildren
            }),
            props &&
            Box({
                element: 'div',
                attribute: props.childAttribute,
                children: props.childChildren
            })
        ]  
    })
}
