import { Box } from "../../lib/Box/Box"
import { TextFieldProps } from "./props"


export const TextField = (props : TextFieldProps) => {
    const {label, children, ...restprops} = props
    return Box({
        element: 'div',
        attribute: {
            class: 'flex flex-col items-start justify-center p-6 relative'
        },
        children: [
            label &&
            Box({
              element: 'label' ,
              attribute: {
                class: 'text-sm grey-2 ff-Nunito pb-1.5'
              },
              children: label
            }),
            Box({
                element: 'input',
                attribute: {
                    class: "pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer",
                    type: 'text',
                    ...restprops
                },
                children: ''
            }),
            children &&
            Box({
                element: 'div',
                attribute:{},
                children: props.children
                })
        ]
    })
}
