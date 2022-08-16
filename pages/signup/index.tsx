import React from "react";
import SignupForm from "../../components/auth/componentsAuth/SignupForm";
import {useActions} from "../../hooks/useAction";

export const AuthUsers = ()=>{
    const {fetchUsers} = useActions();

    const handleSignup = (values) => {
        fetchUsers(values);
    };

    return (
        <SignupForm onSubmit={handleSignup}/>
    )
}

export default AuthUsers;