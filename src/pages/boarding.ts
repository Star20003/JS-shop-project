import {Box} from '../lib/Box/Box'
import {Button} from '../components/Button/Button1'

export const boarding = () => {
    return [ Box({
        element: 'h1',
        attribute: {
            class: 'grey-2 text-2xl ff-gelasio font-semibold mt-56 tracking-widest'
        },
        children: 'MAKE YOUR'
    }),
    Box({
        element: 'h1',
        attribute: {
            class: 'text-3xl ff-gelasio font-semibold text-slate-800 mt-4'
        },
        children: 'HOME BEAUTIFUL'
    }),
    Box({
        element: 'p',
        attribute: {
            class: 'grey-1 text-md ff-Nunito mt-6 ml-14 leading-9'
        },
        children: 'The best simple place where you discover most wonderful furnitures and make your home beautiful'
    }),
    Box({
        element: 'div',
        attribute:{
            class: 'flex justify-center mt-36'
        },
        children: Button({
            parentAttribute: {
                onClick: () => {
                    location.assign('/login')
                },
                class: 'w-44 h-14 rounded-md black-1 '
            },
            childAttribute:{
                class: 'ff-Gelasio '
            },
            children: 'Get Started'
        })
    }) ]
}
 
//<div class="w-8 hover:scale-95 "></div>