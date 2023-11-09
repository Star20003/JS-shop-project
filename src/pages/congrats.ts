import { Button } from "../components/Button/Button1"
import { Box } from "../lib/Box/Box"

export const congrats = () => {
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
                attribute: {
                    class: 'flex items-center justify-center flex-col'
                },
                children: [
                    Box({
                        element: 'h1',
                        attribute : {
                            class: 'mt-24 text-4xl ff-merri black-2 font-bold'
                            },
                        children: 'SUCCESS!'
                    }),
                    Box({
                        element: 'img',
                        attribute : {
                            src: 'drawn-bg.svg',
                            class: 'mt-8'
                            },
                        children: ''
                    }),
                    Box({
                        element: 'p',
                        attribute : {
                            class: 'mt-12 text-lg ff-Nunito black-5 px-6'
                            },
                        children: 'Your order will be delivered soon. Thank you for choosing our app!!'
                    }),
                    Button({
                        parentAttribute: {
                            class: 'w-80 h-14 rounded-lg mt-10 black-1 ',
                            onClick: (e: Event) => {
                                e.preventDefault()
                                location.assign('/underConstruction')
                            }
                        },
                        childAttribute:{
                            class: 'ff-Nunito '
                        },
                        children: 'Track your orders'
                    }),
                    Button({
                        parentAttribute: {
                            class: 'w-80 h-14 rounded-lg mt-6 border-zinc-800 border-2 ',
                            onClick: (e: Event) => {
                                e.preventDefault()
                                location.assign('/home')
                            }
                        },
                        childAttribute:{
                            class: 'ff-Nunito black-2'
                        },
                        children: 'BACK TO HOME'
                    }),
                ]
            })
        ]
    })
}

//< class="h-32 w-80 shadow-lg rounded-xl mt-5 text-lg text-4xl border-2 border-slate-950 w-9"></div>