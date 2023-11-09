import { Button } from '../../components/Button/Button1'
import { Form } from '../../components/Form/Form'
import { TextField } from '../../components/TextField/TextField'
import { handleRegisterUser } from '../../functions/registerUser'
import { signupFormValidation } from '../../functions/signupFormValidation'
import {Box} from '../../lib/Box/Box'
import { signupProps } from './signupProps'

export const signup = () => {

    const registerForm : signupProps = {
        name: "",
        email: "" ,
        password: "",
        confirmPassword: ""
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
                children: Box({
                    element: 'h1',
                    attribute: {
                        class: 'text-slate-950 text-2xl ff-merri font-semibold mt-7 tracking-wider leading-10'
                    },
                    children: 'WELCOME'
                })    
            }),
            Form({
                parentAttribute: {
                    class: 'w-80 h-360 '
                },
                childAttribute: {
                    class: 'flex flex-col justify-center items-center mt-3'
                },
                parentChildren: [
                    TextField({
                        label: 'Name',
                        onKeyup: (e: Event) => {
                            registerForm.name = (e.target as HTMLInputElement).value
                        }
                    }),
                    TextField({
                        label: 'Email',
                        onKeyup: (e: Event) => {
                            registerForm.email = (e.target as HTMLInputElement).value
                        }
                    }),
                    TextField({
                        label: 'Password',
                        id: 'password',
                        onKeyup: (e: Event) => {
                            registerForm.password = (e.target as HTMLInputElement).value
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
                    }),
                    TextField({
                        label: 'Confirm Password',
                        id: 'confimPassword',
                        onKeyup: (e: Event) => {
                            console.log(e)
                            registerForm.confirmPassword = (e.target as HTMLInputElement).value
                        },
                        children: Box({
                            element: 'button',
                            attribute: {
                                class: 'absolute top-12 left-17',
                                onClick: (e:Event) => {
                                    e.preventDefault()
                                    const confirmPasswordInput = document.getElementById('confirmPassword')
                                    if (confirmPasswordInput && confirmPasswordInput instanceof HTMLInputElement && confirmPasswordInput.type === 'text') {
                                        confirmPasswordInput.type = 'password'
                                    } else if (confirmPasswordInput && confirmPasswordInput instanceof HTMLInputElement && confirmPasswordInput.type === 'password'){
                                        confirmPasswordInput.type = 'text'
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
                    Button({
                        parentAttribute: {
                            class: 'w-64 h-11 rounded-lg mt-5 black-1 ',
                            onClick: (e: Event) => {
                                e.preventDefault()
                                if (signupFormValidation(registerForm) === true) {
                                    handleRegisterUser(registerForm)
                                    location.assign('/login')
                                }   
                            }
                        },
                        childAttribute:{
                            class: 'ff-Nunito '
                        },
                        children: 'SIGN UP'
                    }),
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex mt-7 gap-1',
                        },
                        children: [
                            Box({
                                element: 'span',
                                attribute: {
                                    class: 'ff-Nunito text-sm font-semibold grey-1'
                                },
                                children: 'Already have account?'
                            }),
                            Box({
                                element: 'a',
                                attribute: {
                                    class: 'ff-Nunito text-sm font-bold black-2',
                                    href: '/login'
                                },
                                children: 'SIGN IN'
                            }),
                        ]
                    })
                ]
            })
        ]
    })
}