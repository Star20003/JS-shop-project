import { App } from './App'

import './style.css'

//DOM
const root = document.querySelector<HTMLDivElement>('#app')

//Render
root!.append(App())