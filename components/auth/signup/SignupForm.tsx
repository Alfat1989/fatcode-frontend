import React, {useState} from "react";
import {reduxForm} from "redux-form";
import styles from "/styles/_form.module.scss"
import InputUI from "../../UI/InputUI/InputUI"
import ButtonUI from "../../UI/ButtonUI/ButtonUI"
import {InputSignupForm} from "../../../data/TextsLists";


let SignupForm:React.FC = (props) => {
    const { handleSubmit } = props;

    const [button, setButton] = useState([
        {id: 1, content: "Зареистрироваться"}
    ]);

    return (
        <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <InputUI inputs={InputSignupForm}/>
                <ButtonUI buttons={button}/>
            </form>
        </div>

    )
}

SignupForm = reduxForm({
    form: 'signup',
})(SignupForm);

export default SignupForm