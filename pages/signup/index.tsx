import React from "react";
import SignupForm from "../../components/auth/signup/SignupForm";
import {useActions} from "../../hooks/useAction";

export const SignupUser = ()=>{
    const {signupUser} = useActions();

    const handleSignup = (values) => {
        signupUser(values);
    };

    return (
        <SignupForm onSubmit={handleSignup}/>
    )
}

export default SignupUser;