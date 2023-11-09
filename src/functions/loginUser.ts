import { TextField } from "../components/TextField/TextField";
import { Box } from "../lib/Box/Box";
import { render } from "../lib/render/render";
import { loginProps } from "../pages/login/loginProps"

export const handleLoginUser = (loginForm: loginProps) => {   

    const existedUsers = localStorage.getItem('users')
    const parsedExistedUsers = existedUsers? JSON.parse(existedUsers) : null

    if (!loginForm.email || !loginForm.password) {
      alert('All Fields Must Be Filled')
      /*render(
        'email',
         Box({
          element: 'div',
          attribute: {
            class: 'flex flex-col gap-3'
          },
          children: [
            TextField({
              label: 'Email',
              id: 'email',
              onKeyup: (e: Event) => {
                  loginForm.email = (e.target as HTMLInputElement).value
              },
            }),
            Box({
              element: 'div',
              attribute: {
               class: 'text-red-700 text-sm'
              },
              children: 'All Fields Must Be Filled'
           })
          ]
        })
      )*/  
    }
    const existedUser = parsedExistedUsers?.find(( user: typeof loginForm ) => user.email === loginForm.email && user.password === loginForm.password)
    if (existedUser) {
        localStorage.setItem('login', '1');
        return location.assign('/home');
      } else {
        alert('Email or password is wrong')
      }
}
//<div class='text-red-700'></div>