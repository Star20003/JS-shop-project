import { loginProps } from "../pages/login/loginProps"

export const handleLoginUser = (loginForm: loginProps) => {
    const existedUsers = localStorage.getItem('users')
    const parsedExistedUsers = existedUsers? JSON.parse(existedUsers) : null

    const existedUser = parsedExistedUsers.find(( user: typeof loginForm ) => user.email === loginForm.email && user.password === loginForm.password)
    if(existedUser){
        localStorage.setItem('login', '1')
        return location.assign('/home')
    } else {
        alert('Email Or Password Is Wrong')
    }
    if(!loginForm.email || !loginForm.password){
        alert('All Fields Must Be Filled')
        return false
    }
}