import {Box} from '../../lib/Box/Box'
import {boarding} from '../../pages/boarding'
import { cart } from '../../pages/cart'
import { checkOut } from '../../pages/checkOut'
import { home } from '../../pages/home'
import { login } from '../../pages/login/login'
import { product } from '../../pages/product'
import { signup } from '../../pages/signup/signup'

export const Layout = () => {
    let isLoggedIn = !!parseInt(localStorage.getItem('login') as string)
    
    if (location.pathname === '/') {
        return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-8 bg',
            },
            children: boarding()
        })
    } else if (location.pathname === '/login') {
        return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-8 bg-white shadow-md',
            },
            children: login()
        })
    } else if (location.pathname === '/signup') {
        return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-8 bg-white shadow-md',
            },
            children: signup()
        })
    } else if (location.pathname === '/home') {
        if (isLoggedIn) return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-0 bg-white shadow-md',
            },
            children: home()
        })
    } else if (location.pathname === '/product') {
        if (isLoggedIn) return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 bg-white shadow-md',
            },
            children: product()
        })
    } else if (location.pathname === '/cart') {
        if (isLoggedIn) return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-8 bg-white shadow-md',
            },
            children: cart()
        })
    } else if (location.pathname === '/checkOut') {
        if (isLoggedIn) return Box ({
            element: 'div',
            attribute: {
                class: 'w-96 p-8 bg-white shadow-md',
            },
            children: checkOut()
        })
    }
}