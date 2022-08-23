import React from "react";
import styles from "../../../styles/Header.module.sass";
import { LinkProps } from "../../../types/UI/HeaderLinks";



const HeaderLinks: React.FC<LinkProps> = ({links})=>{
    return (
        <>
            {links.map(item=>{
                return <li key={item.id} className={styles.nav__item}>
                <a className={styles.nav__link} href={item.href}>{item.text}</a>
              </li>})}
        </>
    )
}

export default HeaderLinks