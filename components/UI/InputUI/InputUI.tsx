//UI текстового поля
import React from "react";
import {InputProps} from "../../../types/UI/FormInput";
import {Field} from "redux-form";
import styles from "../../../styles/_form.module.scss"

const InputUI: React.FC<InputProps> = ({inputs}) => {
    return (
        <>
            {inputs.map(item =>{
                return<>
                    <label htmlFor={item.tag_id}>{item.label}</label>
                    <Field
                        className={styles.form__input}
                        name={item.name}
                        component="input"
                        type={item.type}
                        id={item.tag_id}
                        placeholder={item.placeholder}/>
                </>
            })}
        </>
    )
}

export default InputUI;