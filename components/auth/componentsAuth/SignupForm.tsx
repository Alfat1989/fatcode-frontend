import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from "/styles/_form.module.scss"

let SignupForm:React.FC = (props) => {
    const { handleSubmit } = props;


    return (
        <section className={styles.registration}>
            <div className={styles.card}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="login">Логин</label>
                    <Field className={styles.form__input} name="username" component="input" type="text" id="login" placeholder="First Name"/>
                    <label htmlFor="email">E-mail</label>
                    <Field className={styles.form__input} name="email" component="input" type="text" id="email" placeholder="First Name"/>
                    <label htmlFor="password">Новый пароль</label>
                    <Field className={styles.form__input} name="password" component="input" type="text" id="password" placeholder="First Name"/>
                    <label htmlFor="re_password">Повторите пароль</label>
                    <Field className={styles.form__input} name="re_password" component="input" type="text" id="re_password" placeholder="First Name"/>
                    <button type="submit">Зарегистрироватсья</button>
                </form>
            </div>
        </section>

    )
}

SignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

export default SignupForm