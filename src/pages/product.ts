import { Button } from "../components/Button/Button1"
import { Box } from "../lib/Box/Box"
import { render } from "../lib/render/render"

export const product = () => {

    type amountType = {
        number: number
    }

    const productAmount : amountType = {
        number: 1 
    }

    return Box({
        element: 'div',
        attribute:{
            class: 'flex flex-col mb-7'
        },
        children: [
            Box ({
                element: 'div',
                attribute : {
                    class: 'product-bg relative'
                    },
                children: [
                    Box({
                        element: 'div',
                        attribute : {
                            class: 'flex justify-between items-center pr-10 pt-3'
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
                        attribute:{
                            class: 'flex flex-col items-center absolute -left-8 top-24'
                        },
                        children: [
                            Box({
                                element: 'a',
                                attribute:{
                                    class: 'w-9 h-9 bg-white rounded-md flex justify-center items-center shadow-md',
                                    href: '/home'
                                },
                                children: 
                                Box({
                                    element: 'img',
                                    attribute:{
                                        src: '/arrow.svg'
                                    },
                                    children: ''
                                })
                            }),
                            Box({
                                element: 'div',
                                attribute:{
                                    class: 'flex flex-col items-center justify-between py-4 w-16 h-48 drop-shadow-md rounded-40 bg-white mt-8 flex justify-center items-center'
                                },
                                children:[
                                    Box({
                                        element: 'button',
                                        attribute: {
                                            class: 'w-10 h-10 rounded-full bg-white border-8 border-neutral-400',
                                            id: 'platte1',
                                            type: 'radio',
                                            onClick: () => {
                                                if ((document.getElementById('platte1'))?.classList.contains('border-neutral-400')) {
                                                    (document.getElementById('platte1'))?.classList.remove('border-neutral-400');
                                                    (document.getElementById('platte1'))?.classList.add('border-neutral-200')
                                                } else {
                                                    (document.getElementById('platte1'))?.classList.remove('border-neutral-200');
                                                    (document.getElementById('platte1'))?.classList.add('border-neutral-400')
                                                }     
                                            }
                                        },
                                        children: ''
                                    }),
                                    Box({
                                        element: 'button',
                                        attribute: {
                                            class: 'w-10 h-10 rounded-full bg-brown1 border-8 border-neutral-200',
                                            id: 'platte2',
                                            type: 'radio',
                                            onClick: () => {
                                                if ((document.getElementById('platte2'))?.classList.contains('border-neutral-400')) {
                                                    (document.getElementById('platte2'))?.classList.remove('border-neutral-400');
                                                    (document.getElementById('platte2'))?.classList.add('border-neutral-200')
                                                } else {
                                                    (document.getElementById('platte2'))?.classList.remove('border-neutral-200');
                                                    (document.getElementById('platte2'))?.classList.add('border-neutral-400')
                                                }     
                                            }
                                        },
                                        children: ''
                                    }),
                                    Box({
                                        element: 'button',
                                        attribute: {
                                            class: 'w-10 h-10 rounded-full bg-brown2 border-8 border-neutral-200',
                                            id: 'platte3',
                                            type: 'radio',
                                            onClick: () => {
                                                if ((document.getElementById('platte3'))?.classList.contains('border-neutral-400')) {
                                                    (document.getElementById('platte3'))?.classList.remove('border-neutral-400');
                                                    (document.getElementById('platte3'))?.classList.add('border-neutral-200')
                                                } else {
                                                    (document.getElementById('platte3'))?.classList.remove('border-neutral-200');
                                                    (document.getElementById('platte3'))?.classList.add('border-neutral-400')
                                                }     
                                            }
                                        },
                                        children: ''
                                    })
                                ]
                            })
                        ]
                    }),
                ]
            })  ,
            Box({
                element: 'div',
                attribute:{
                    class: 'flex flex-col px-6'
                },
                children: [
                    Box({
                        element: 'h1',
                        attribute:{
                            class: 'font-medium text-2xl ff-gelasio mt-6 black-2'
                        },
                        children: 'Minimal Stand'
                    }),
                    Box({
                        element: 'div',
                        attribute:{
                            class: 'flex justify-between'
                        },
                        children: [
                            Box({
                                element: 'span',
                                attribute:{
                                    class: 'mt-2 text-3xl font-bold ff-Nunito black-2'
                                },
                                children: '$ 25'
                            }),
                            Box({
                                element: 'div',
                                attribute:{
                                    class: 'flex justify-between items-center gap-3'
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
                                                    render('num', numsUp )
                                                }
                                            },
                                            children: ''
                                        })
                                    }),
                                    Box({
                                        element: 'input',
                                        attribute: {
                                            class: 'text-lg font-semibold tracking-wider w-3 h-3 focus:border-none',
                                            id: 'num',
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
                                                    render('num', numsUp )
                                                }
                                            },
                                            children: ''
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute:{
                    class: 'flex justify-start items-center px-6 mt-4'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute:{
                            class: 'flex justify-center items-center'
                        },
                        children: [
                            Box({
                                element: 'div',
                                attribute:{
                                    clas: 'flex'
                                },
                                children: Box({
                                    element: 'img',
                                    attribute:{
                                        src: '/rate.svg'
                                    },
                                    children: ''
                                }),
                            }),
                            Box({
                                element: 'p',
                                attribute:{
                                    class: 'pl-2 font-bold text-lg ff-Nunito black-2'
                                },
                                children: '4.5'
                            }),
                        ]
                    }),
                    Box({
                        element: 'p',
                        attribute:{
                            class: 'pl-6 font-semibold text-sm grey-1 ff-Nunito'
                        },
                        children: '(50 reviews)'
                    })
                ]
            }),
            Box({
                element: 'p',
                attribute:{
                    class: 'ff-Nunito text-sm font-light px-6 mt-4 grey-3'
                },
                children: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.'
            }),
            Box({
                element: 'div',
                attribute:{
                    class: 'flex items-center justify-between px-6 mt-4 mt-7'
                },
                children: [
                    Box({
                        element: 'button',
                        attribute:{
                            class: 'btn1 flex items-center justify-center w-14 h-14 rounded-lg',
                            style: 'background-color: #F0F0F0',
                            onClick: () => {
                                location.assign('/underConstruction')
                            }
                        },
                        children: Box({
                            element: 'img',
                            attribute:{
                                src: '/mark.svg'
                            },
                            children: ''
                        })
                    }),
                    Button({
                        parentAttribute: {
                            class: 'h-14 w-64 rounded-lg black-1 ',
                            onClick: () => {
                                location.assign('/cart')
                            }
                        },
                        childAttribute:{
                            class: 'ff-Nunito '
                        },
                        children: 'Add to cart'
                    }),
                ]
            })
        ]
    })
} 

