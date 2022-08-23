import React from "react";
import LoginForm from "../../components/auth/login/LoginForm"
import {useActions} from "../../hooks/useAction";

export const LoginUser = ()=>{
    const {signinUser} = useActions();

    const handleLogin = (values) => {
        signinUser(values);
    };

    return (
        <LoginForm onSubmit={handleLogin}/>
    )
}

export default LoginUser;