import { validateEmail } from "../helpers/validateEmail"
import { validatePassword } from "../helpers/validatePassword"
import { signupProps } from "../pages/signup/signupProps"

export const signupFormValidation = (registerForm : signupProps) => {
    if (registerForm.email && !validateEmail(registerForm.email)){
        alert('Invalid Email Address')
        return false
    }
    if (registerForm.password && !validatePassword(registerForm.password)){
        alert('Password must has atleast minimum eight characters, one letter, one number and one special character')
        return false
    }
    if (registerForm.confirmPassword && registerForm.password !== registerForm.confirmPassword){
        alert('Confirm Password Doesnt Match')
        return false
    }
    if(!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmPassword){
        alert('All Fields Must Be Filled')
        return false
    }
    return true
}   