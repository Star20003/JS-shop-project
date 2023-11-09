import { option } from '../components/Button/Button2/option'
import { ShoppingCard } from '../components/ShoppingCard/ShoppingCard'
import {Box} from '../lib/Box/Box'

export const home = () => {
    return Box ({
        element: 'div',
        attribute : {
            id : 'home-page'
            },
        children: [
            Box({
                element: 'div',
                attribute : {
                    class: 'flex justify-between items-center p-8'
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
                    class : 'flex justify-between mt-[-8%] p-8'
                },
                children: [
                    Box({
                        element: 'img',
                        attribute:{
                            src: '/search.svg'
                        },
                        children: null
                    }),
                    Box({
                        element: 'div',
                        attribute:{
                            class: 'flex flex-col items-center'
                        },
                        children: [
                            Box({
                                element: 'span',
                                attribute:{
                                    class: 'ff-gelasio text-lg grey-2 leading-6 font-normal'
                                },
                                children: 'Make home'
                            }),
                            Box({
                                element: 'span',
                                attribute:{
                                    class: 'ff-gelasio text-lg black-3 leading-7 font-bold'
                                },
                                children: 'BEAUTIFUL'
                            })
                        ]
                    }),
                    Box({
                        element: 'img',
                        attribute:{
                            src: '/basket.svg'
                        },
                        children: null
                    })
                ]
            }),
            Box({
                element:'div',
                attribute:{
                    class: 'flex justify-between mt-[-10%] p-8'
                },
                children: [
                    option({
                        icon: '/star.svg',
                        class: 'black-1 ',
                        text: 'Popular',
                        attribute:{
                            style: 'font-weight:600; color: #242424',
                        } 
                    }),
                    option({
                        icon: '/chair.svg',
                        class: ' grey-4 ',
                        text: 'Chair',
                    }),
                    option({
                        icon: '/table.svg',
                        class: 'grey-4 ',
                        text: 'Table',
                    }),
                    option({
                        icon: '/armchair.svg',
                        class: 'grey-4 ',
                        text: 'Armichair',
                    }),
                    option({
                        icon: '/bed.svg',
                        class: 'grey-4 ',
                        text: 'bed',
                    }),
                ]
            }),
            Box({
                element: 'div',
                attribute:{
                    class: 'flex flex-col mt-[-10%] p-8'
                },
                children: [
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex gap-5'
                        },
                        children:[
                            ShoppingCard({
                                image: '/black-lamp.png',
                                info: 'Black Simple Lamp',
                                price: '$ 12.00',
                                direct: '#',
                            }),
                            ShoppingCard({
                                image: '/stand.png',
                                info: 'Minimal Stand',
                                price: '$ 25.00',
                                direct: '/product',
                                productPage: '/product'
                            })
                        ]
                    }),
                    Box({
                        element: 'div',
                        attribute: {
                            class: 'flex mt-4 gap-5'
                        },
                        children:[
                            ShoppingCard({
                                image: '/chair.png',
                                info: 'Coffee Chair',
                                price: '$ 20.00',
                                direct: '#'
                            }),
                            ShoppingCard({
                                image: '/desk.png',
                                info: 'Simple Desk',
                                price: '$ 50.00',
                                direct: '#'
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: 'div',
                attribute: {
                    class: 'w-96 h-20 flex p-8 justify-between items-center mt-[-5%] footer-shadow'
                },
                children: [
                    Box({
                        element: 'a',
                        attribute: {
                            href: '#'
                        },
                        children: 
                            Box({
                                element: 'img',
                                attribute:{
                                    src: '/home.svg',
                                },
                                children: ''
                            })
                    }),
                    Box({
                        element: 'a',
                        attribute: {
                            href: '/underConstruction'
                        },
                        children: 
                            Box({
                                element: 'img',
                                attribute:{
                                    src: '/marker.svg',
                                },
                                children: ''
                            })
                    }),
                    Box({
                        element: 'a',
                        attribute: {
                            href: '/underConstruction'
                        },
                        children: 
                            Box({
                                element: 'img',
                                attribute:{
                                    src: '/bell.svg',
                                },
                                children: ''
                            })
                    }),
                    Box({
                        element: 'a',
                        attribute: {
                            href: '/underConstruction'
                        },
                        children: 
                            Box({
                                element: 'img',
                                attribute:{
                                    src: '/person.svg',
                                },
                                children: ''
                            })
                    }),
                ]
            })
        ]
    })
}