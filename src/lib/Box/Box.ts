import {BoxProps} from './BoxProps'

export const Box = ( props:BoxProps ) => {
    const el = document.createElement(props.element)

    if(props.attribute){
        Object.keys(props.attribute).forEach( (key) => {
            if (key.startsWith("on")) {
                el.addEventListener(key.slice(2).toLowerCase() , props.attribute[key])
                return null;
            }
            el.setAttribute(key, props.attribute[key])
        })
    }

    if(!Array.isArray(props.children)){
        el.append(props.children!)
    }
    else{
        el.append(...props.children.filter((i) => !!i))
    }

    return el
}
