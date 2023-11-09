import { Box } from "../lib/Box/Box"

export const underConstruction = () => {
    return Box({
        element: 'div',
        attribute:{
            class: 'flex flex-col mb-7'
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
            Box ({
                element: 'div',
                attribute : {
                    class: 'flex items-center justify-center'
                },
                children: [
                    Box ({
                        element: 'p',
                        attribute : {
                            class: 'text-2xl ff-merri mt-14'
                            },
                        children: 'Coming Soon...'
                    })
                ]
            })
        ]
    })
}
