import {boarding} from '../pages/boarding' 
import { home } from '../pages/home'
import {login} from '../pages/login/login' 
import { product } from '../pages/product'
import { signup } from '../pages/signup/signup'

export const router = () => {

    const isLoggedIn = !!parseInt(localStorage.getItem('login') as string)

    switch(window.location.pathname) {
    case ('./login'):
        return !isLoggedIn && login()
    case ('./signup'):
        return !isLoggedIn && signup()
    case ('./home'):
        return isLoggedIn && home()
    case ('./product'):
        return isLoggedIn && product()
    default:
        return boarding()
    }  
}