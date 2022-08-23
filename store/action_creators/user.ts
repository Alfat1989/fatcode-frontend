import axios from "axios";
import {UserSignup, UserSignin} from "../../types/AuthTypes";

export const signupUser = (user: UserSignup) => {
    return () => {
        try {
            const response = axios.post('http://194.67.110.24/api/v1/auth/users/', user)
            console.log(response);
        } catch (e) {
            console.log("error")
        }
    }
}

export const signinUser = (user: UserSignin) => {
    return () => {
        try {
            const response = axios.post('http://194.67.110.24/api/v1/auth/token/login', user)
                .then(response => localStorage.setItem('auth_token', response.data.auth_token))
            console.log(response);
        } catch (e) {
            console.log("error")
        }
    }
}
