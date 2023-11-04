import {Box} from '../../lib/Box/Box'
import{Form} from '../../components/Form/Form'
import { Button } from '../../components/Button/Button1'
import { TextField } from '../../components/TextField/TextField'
import { loginProps } from './loginProps'
import { handleLoginUser } from '../../functions/loginUser'

export const login = () => {

    const loginForm : loginProps = {
        email: "" ,
        password: "",
    }
    return Box ({
        element: 'div',
        attribute : {
            id : 'login-page'
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
                    class: 'flex justify-center items-center gap-5 mt-16 hr-line'
                } ,
                children: Box({
                    element: 'img',
                    attribute: {
                        src: '/icon.svg'
                    },
                    children: ''
                })
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'flex flex-col'
                },
                children: [
                    Box({
                        element: 'h1',
                        attribute: {
                            class: 'grey-2 text-3xl ff-merri mt-8 leading-10'
                        },
                        children: 'Hello !'
                    }),
                    Box({
                        element: 'h1',
                        attribute: {
                            class: 'text-slate-950 text-2xl ff-merri font-semibold mt-2 tracking-wider leading-10'
                        },
                        children: 'WELCOME BACK'
                    })
                ]
            }),
            Form({
                parentAttribute: {
                    class: 'w-80 h-96 '
                },
                childAttribute: {
                    class: 'flex flex-col justify-center items-center mt-3'
                },
                parentChildren: [
                    TextField({
                        label: 'Email',
                        onKeyup: (e: Event) => {
                            loginForm.email = (e.target as HTMLInputElement).value
                        }
                    }),
                    TextField({
                        label: 'Password',
                        id: 'password',
                        onKeyup: (e: Event) => {
                            loginForm.password = (e.target as HTMLInputElement).value
                        },
                        children: Box({
                            element: 'button',
                            attribute: {
                                class: 'absolute top-12 left-17',
                                onClick: (e:Event) => {
                                    e.preventDefault()
                                    const passwordInput = document.getElementById('password')
                                    if (passwordInput && passwordInput instanceof HTMLInputElement && passwordInput.type === 'text') {
                                        passwordInput.type = 'password'
                                    } else if (passwordInput && passwordInput instanceof HTMLInputElement && passwordInput.type === 'password'){
                                        passwordInput.type = 'text'
                                    } else {
                                        null
                                    }
                                }
                            },
                            children: Box({
                                element: 'img',
                                attribute: {
                                    src: '/seen.svg'
                                },
                                children: ''
                            })
                        })
                    })
                ],
                childChildren: [ 
                    Box({
                    element: 'a',
                    attribute: {
                        class: 'ff-Nunito text-md font-semibold black-2',
                        href: '/login'
                    },
                    children: 'Forgot Password'
                    }),
                    Button({
                        parentAttribute: {
                            class: 'w-64 h-11 rounded-lg mt-7 ',
                            onClick: (e: Event) => {
                                e.preventDefault()
                                handleLoginUser(loginForm)
                            }
                        },
                        childAttribute:{
                            class: 'ff-Nunito '
                        },
                        children: 'Log in'
                    }),
                    Box({
                        element: 'a',
                        attribute: {
                            class: 'ff-Nunito text-md font-semibold black-2 mt-6',
                            href: '/signup'
                        },
                        children: 'SIGN UP'
                    }),
                ]
            })
        ]
    })
}