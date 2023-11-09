import { Button } from "../components/Button/Button1"
import { Box } from "../lib/Box/Box"

export const checkOut = () => {
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
                            href: '/cart'
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
                        children: 'Check out'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex flex-col mt-10'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex justify-between'
                        },
                        children: [
                            Box({
                                element: 'h1',
                                attribute:{
                                    class: 'ff-Nunito text-xl font-semibold grey-2'
                                },
                                children: 'Shopping Address'
                            }),
                            Box({
                                element: 'button',
                                attribute: {},
                                children: Box({
                                    element: 'img',
                                    attribute:{
                                        src: '/edit.svg'
                                    },
                                    children: ''
                                })
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'w-80 h-32 item-shadow mt-4 rounded-lg'
                },
                children: [
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito text-lg font-bold black-2 py-4 pl-5 border-b-2'
                        },
                        children: 'Bruno Fernandes'
                    }),
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito text-sm grey-1 py-4 px-5'
                        },
                        children: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex flex-col mt-8'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex justify-between'
                        },
                        children: [
                            Box({
                                element: 'h1',
                                attribute:{
                                    class: 'ff-Nunito text-xl font-semibold grey-2'
                                },
                                children: 'Delivery method'
                            }),
                            Box({
                                element: 'button',
                                attribute: {},
                                children: Box({
                                    element: 'img',
                                    attribute:{
                                        src: '/edit.svg',
                                    },
                                    children: ''
                                })
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: ' flex items-center py-4 w-80 h-16 item-shadow mt-4 rounded-lg'
                },
                children: [
                    Box({
                        element: 'img',
                        attribute: {
                            src: '/card.svg'
                        },
                        children: ''
                    }),
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito font-semibold text-sm black-3'
                        },
                        children: '**** **** **** 3947'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex flex-col mt-8'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex justify-between'
                        },
                        children: [
                            Box({
                                element: 'h1',
                                attribute:{
                                    class: 'ff-Nunito text-xl font-semibold grey-2'
                                },
                                children: 'Payment'
                            }),
                            Box({
                                element: 'button',
                                attribute: {},
                                children: Box({
                                    element: 'img',
                                    attribute:{
                                        src: '/edit.svg'
                                    },
                                    children: ''
                                })
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: ' flex items-center py-4 px-5 w-80 h-16 item-shadow mt-4 rounded-lg'
                },
                children: [
                    Box({
                        element: 'img',
                        attribute: {
                            src: '/delivery-method.svg'
                        },
                        children: ''
                    }),
                    Box({
                        element: 'p',
                        attribute: {
                            class: 'ff-Nunito font-bold text-sm black-3 px-4'
                        },
                        children: 'Fast (2-3days)'
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: ' flex items-center py-4 px-5 w-80 h-36 item-shadow mt-10 rounded-lg'
                },
                children: Box({
                    element: 'div',
                    attribute: {
                        class: 'flex flex-col gap-4 items-center'
                    },
                    children: [
                        Box({
                            element: 'div',
                            attribute: {
                                class: 'flex gap-40 justify-between items-center'
                            },
                            children: [
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg grey-1'
                                    },
                                    children: 'Order:'
                                }),
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg black-3 font-semibold'
                                    },
                                    children: '$ 95.00'
                                }),
                            ]
                        }),
                        Box({
                            element: 'div',
                            attribute: {
                                class: 'flex gap-36 justify-between items-center'
                            },
                            children:  [
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg grey-1'
                                    },
                                    children: 'Delivery:'
                                }),
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg black-3 font-semibold'
                                    },
                                    children: '$ 5.00'
                                }),
                            ]
                        }),
                        Box({
                            element: 'div',
                            attribute: {
                                class: 'flex gap-40 justify-between items-center'
                            },
                            children:  [
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg grey-1'
                                    },
                                    children: 'Total:'
                                }),
                                Box({
                                    element: 'p',
                                    attribute: {
                                        class: 'ff-Nunito text-lg black-3 font-semibold'
                                    },
                                    children: '$ 100.00'
                                }),
                            ]
                        }),
                    ]
                })
            }),
            Button({
                parentAttribute: {
                    class: 'w-80 h-14 rounded-lg mt-8 black-1 ',
                    onClick: (e: Event) => {
                        e.preventDefault()
                        location.assign('/congrats')
                    }
                },
                childAttribute:{
                    class: 'ff-Nunito '
                },
                children: 'SUBMIT ORDER'
            }),
        ]
    })
}