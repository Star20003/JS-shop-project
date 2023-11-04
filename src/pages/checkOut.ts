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
            })
        ]
    })
}
//< class="h-11 w-80 shadow-lg rounded-xl mt-5 text-lg w-80 h-14"></div>