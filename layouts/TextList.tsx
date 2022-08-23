import React from "react";
import styles from "../styles/Header.module.sass";
import {TextList} from "../types/TextList";
import Link from "next/link";
import {useRouter} from "next/router";


const TextList: React.FC<TextList> = ({text, style }) =>{
    return (
        <>
            {text.map(item=>{
                return <li key={item.id} className={styles.nav__item}>
                    <Link href={item.href}><a className={styles.nav__link}>{item.text}</a></Link>
                </li>})}
        </>
    )
}

export default TextList;