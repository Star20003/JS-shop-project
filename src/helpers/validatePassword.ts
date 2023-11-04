export const validatePassword = (email : string) => {
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(email)) {
        return true
    }
    return false
}