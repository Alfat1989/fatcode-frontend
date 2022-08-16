import React from "react";
import {Field, reduxForm} from "redux-form";


let SignupForm:React.FC = (props) => {
    const { handleSubmit } = props;

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">Логин</label>
            <Field className="input" name="username" component="input" type="text" placeholder="First Name"/>
            <label htmlFor="email">E-mail</label>
            <Field className="input" name="email" component="input" type="text" placeholder="First Name"/>
            <label htmlFor="password">Новый пароль</label>
            <Field className="input" name="password" component="input" type="text" placeholder="First Name"/>
            <label htmlFor="re_password">Повторите пароль</label>
            <Field className="input" name="re_password" component="input" type="text" placeholder="First Name"/>
            <button type="submit">Зарегистрироватсья</button>
        </form>
    )
}

SignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

export default SignupForm