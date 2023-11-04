import { Box } from "../../lib/Box/Box"
import { cardProps } from "./props"

export const ShoppingCard = (props: cardProps) => {
    const {image,info,price,direct} = props
    return Box({
        element:'div',
        attribute:{
            class: 'flex flex-col items-start relative'
        },
        children: [
            Box({
                element: 'img',
                attribute:{
                    src: image,
                    class: 'rounded-xl'
                },
                children: ''
            }),
            Box({
                element: 'a',
                attribute: {
                    href: direct
                },
                children: 
                    Box({
                        element: 'img',
                        attribute:{
                            src: '/shop.svg',
                            class: 'top-96 left-28 absolute'
                        },
                        children: ''
                    })
            }),
            Box({
                element: 'span',
                attribute:{
                    class: 'text-sm ff-Nunito grey-3 mt-2'
                },
                children: info
            }),
            Box({
                element: 'span',
                attribute:{
                    class: 'text-sm font-bold ff-Nunito black-2 mt-1'
                },
                children: price
            })
        ]
    })
}
//<div class="text-sm ff-Nunito top-"></div>