import React from "react";
import styles from "../styles/Header.module.sass";
import {TextList} from "../types/TextList";


const TextList: React.FC<TextList> = ({text, style }) =>{
    return (
        <>
            {text.map(item=>{
                return <li key={item.id} className={styles.nav__item}>
                    <a className={styles.nav__link} href={item.href}>{item.text}</a>
                </li>})}
        </>
    )
}

export default TextList;