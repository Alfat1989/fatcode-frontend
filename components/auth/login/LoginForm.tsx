import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import styles from "/styles/_form.module.scss"
import {InputProps} from "../../../types/UI/FormInput"
import InputUI from "../../UI/InputUI/InputUI"
import ButtonUI from "../../UI/ButtonUI/ButtonUI"


let LoginForm:React.FC = (props) => {
    const { handleSubmit } = props;

    const [input, setInput] = useState([
        {id: 1,label: "E-mai", name: "email", type: "text", tag_id: "email", placeholder: "email"},
        {id: 2,label: "Пароль", name: "password", type: "text", tag_id: "password", placeholder: "password"}
    ])

    const [button, setButton] = useState([
        {id: 1, content: "Войти"}
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

LoginForm = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginForm