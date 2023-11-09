import { Button } from "../components/Button/Button1"
import { item } from "../components/item/item"
import { Box } from "../lib/Box/Box"

export const cart = () => {
    return Box ({
        element: 'div',
        attribute : {
            },
        children: [
            Box({
                element: 'div',
                attribute : {
                    class: 'flex justify-between items-center'
                    },
                children: [
                    Box({
                        element: 'span',
                        attribute : {
                            class: 'text-md font-semibold tracking-widest'
                            },
                        children: '9:41'
                    }),
                    Box({
                        element: 'div',
                        attribute:{
                            class : 'flex'
                        },
                        children: Box({
                            element: 'img',
                            attribute: {
                                src: '/header.svg'
                            },
                            children: ''
                        })
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute : {
                    class: 'flex justify-start items-center mt-7 gap-28'
                    },
                children: [
                    Box({
                        element: 'a',
                        attribute : {
                            href: '/product'
                            },
                        children: Box({
                            element: 'img',
                            attribute : {
                                src: '/arrow.svg'
                                },
                            children: ''
                        }),
                    }),
                    Box({
                        element: 'div',
                        attribute : {
                            class: 'ff-merri font-bold text-base'
                            },
                        children: 'My cart'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute : {
                    class: 'flex flex-col mt-7 gap-3'
                    },
                children: [
                    item({
                        img: '/added-stand.png',
                        product: 'Minimal Stand',
                        price: '$ 25.00',
                        id: 'Stand'
                    }),
                    item({
                        img: '/added-table.png',
                        product: 'Coffee Table',
                        price: '$ 20.00',
                        id: 'table'
                    }),
                    item({
                        img: '/added-desk.png',
                        product: 'Minimal Desk',
                        price: '$ 50.00',
                        id: 'desk'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex mt-40 relative'
                },
                children: [
                    Box({
                        element: 'input',
                        attribute: {
                            class: 'h-11 w-80 shadow-md bg-white rounded-xl border border-stone-100 pl-5',
                            placeholder: 'Enter your promo code'
                        },
                        children: ''
                    }),
                    Box({
                        element: 'a',
                        attribute: {
                            class: 'flex items-center justify-center absolute left-[86%]',
                            href: '/underConstruction'
                        },
                        children: Box({
                            element: 'img',
                            attribute: {
                                src: '/next.svg'
                            },
                            children: ''
                        })
                    }),
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex justify_between items-center p-5 gap-36'
                },
                children: [
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito font-bold text-xl grey-1'
                        },
                        children: 'Total:'
                    }),
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito font-bold text-xl blacl-2'
                        },
                        children: '$ 95.00'
                    })
                ]
            }),
            Button({
                parentAttribute: {
                    class: 'w-80 h-14 rounded-lg mt-6 black-1 ',
                    onClick: (e: Event) => {
                        e.preventDefault()
                        location.assign('/checkOut')
                    }
                },
                childAttribute:{
                    class: 'ff-Nunito '
                },
                children: 'Check out'
            }),
        ]
    })
}