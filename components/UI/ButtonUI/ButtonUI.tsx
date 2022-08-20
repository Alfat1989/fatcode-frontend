//Кнопка с карандашом, редактирование, смена питомца и т.д.
import React from "react";
import {ButtonProps} from "../../../types/UI/Btn";

const ButtonUI: React.FC<ButtonProps> = ({buttons}) => {
    return (
        <>
            {buttons.map(item => {
                <button className="profile__edit-btn" onClick={item.handler} type={item.type}>{item.content}</button>
            })}
        </>
    )
}

export default ButtonUI;