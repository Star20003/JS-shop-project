import { Box } from "../../lib/Box/Box"
import { render } from "../../lib/render/render"
import { itemProps } from "./props"

export const item = (props: itemProps) => {
    type amountType = {
        number: number
    }

    const productAmount : amountType = {
        number: 1 
    }

    const ids ='test'+ Math.random()

    const {img, product, price, id} = props
    return Box({
        element: 'div',
        attribute:{
            id: id,
            class: 'flex justify-start items-start gap-6 border-b-2 pb-3 border-stone-100'
        },
        children: [
            Box({
                element: 'img',
                attribute:{
                    src: img,
                    class: 'rounded-lg'
                },
                children: ''
            }),
            Box({
                element: 'div',
                attribute:{
                    class: 'flex flex-col gap-y-6 justify-between'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute:{
                            class: 'flex flex-col'
                        },
                        children: [
                            Box({
                                element: 'p',
                                attribute:{
                                    class: 'text-sm font-semibold ff-Nunito grey-2'
                                },
                                children: product
                            }),
                            Box({
                                element: 'p',
                                attribute:{
                                    class: 'text-base font-bold ff-Nunito black-3'
                                },
                                children: price
                            })
                        ]
                    }),
                    Box({
                        element: 'div',
                        attribute:{
                            class: 'flex justify-between items-center gap-2'
                        },
                        children: [
                            Box({
                                element: 'button',
                                attribute: {
                                    class: 'h-8 w-8 grey-5 rounded-md flex justify-center items-center'
                                },
                                children: Box({
                                    element: 'img',
                                    attribute: {
                                        src: '/plus.svg',
                                        onClick: () => {
                                            let numsUp = productAmount.number
                                            numsUp += 1
                                            productAmount.number = numsUp
                                            render(ids, numsUp )
                                        }
                                    },
                                    children: ''
                                })
                            }),
                            Box({
                                element: 'input',
                                attribute: {
                                    class: 'flex items-center justify-center text-lg font-semibold tracking-wider w-3 h-4 focus:border-none',
                                    id: ids,
                                    value: productAmount.number,
                                    },
                                children: ''
                            }),
                            Box({
                                element: 'button',
                                attribute: {
                                    class: 'h-8 w-8 grey-5 rounded-md flex justify-center items-center'
                                },
                                children: Box({
                                    element: 'img',
                                    attribute: {
                                        src: '/minus.svg',
                                        onClick: () => {
                                            let numsUp = productAmount.number
                                            numsUp -= 1
                                            productAmount.number = numsUp
                                            render(ids, numsUp )
                                        }
                                    },
                                    children: ''
                                })
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'button',
                attribute: {
                    class: 'ml-14',
                    onClick: () => {
                        render(id,'')
                    }
                },
                children: Box({
                    element: 'img',
                    attribute: {
                        src: '/cancel.svg'
                        },
                    children: ''
                })
            })
        ]
    })
}