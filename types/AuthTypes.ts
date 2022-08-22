// interfase for registration form fields
export interface UserSignup {
    username: string;
    email: string;
    password: string;
    re_password: string;
}

// interfase for login form fields
export interface UserSignin {
    email: string;
    password: string;
}

