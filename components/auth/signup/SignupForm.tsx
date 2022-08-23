import React, {useState} from "react";
import {reduxForm} from "redux-form";
import styles from "/styles/_form.module.scss"
import InputUI from "../../UI/InputUI/InputUI"
import ButtonUI from "../../UI/ButtonUI/ButtonUI"


let SignupForm:React.FC = (props) => {
    const { handleSubmit } = props;

    const [input, setInput] = useState([
        {id: 1,label: "Логин", name: "username", type: "text", tag_id: "login", placeholder: "login"},
        {id: 2,label: "E-mai", name: "email", type: "text", tag_id: "email", placeholder: "email"},
        {id: 3,label: "Новый пароль", name: "password", type: "text", tag_id: "password", placeholder: "password"},
        {id: 4,label: "Повторите пароль", name: "re_password", type: "text", tag_id: "re_password", placeholder: "re_password"}
    ])

    const [button, setButton] = useState([
        {id: 1, content: "Зареистрироваться"}
    ]);

    return (
        <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <InputUI inputs={input}/>
                <ButtonUI buttons={button}/>
            </form>
        </div>

    )
}

SignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

export default SignupForm