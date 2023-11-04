import { signupProps } from "../pages/signup/signupProps"

export const handleRegisterUser = (registerForm: signupProps) => {
    const existedUsers = localStorage.getItem('users')
    const parsedExistedUsers = existedUsers? JSON.parse(existedUsers) : null

    if (parsedExistedUsers){

        const existedUser = parsedExistedUsers.find(( user: typeof registerForm ) => user.email === registerForm.email)
        if(existedUser) return alert ('User with this Email already exists')

        parsedExistedUsers.push(registerForm)
        const registerFormJson = JSON.stringify(parsedExistedUsers)
        localStorage.setItem('users', registerFormJson)
    }
    else{
        const registerFormJson = JSON.stringify([registerForm])
        localStorage.setItem('users',registerFormJson)
    }
}