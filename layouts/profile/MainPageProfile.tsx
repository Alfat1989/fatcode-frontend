import React from "react";
import {Child} from "../../types/HeaderLinks";
import styles from "../../styles/profile/MainPage.module.sass"


//Обертка для вывода в профиле пользователя
export const MainPageProfile: React.FC<Child> = ({children}) =>{
    return(
        <div className={styles.main}>
                {children}
        </div>
    )
}