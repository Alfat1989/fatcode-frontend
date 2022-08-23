import React, { useState } from "react";
import styles from '../../../styles/Header.module.sass';
import HeaderLinks from "./HeaderLinks";
import LoginNavbar from "./LoginNavbar";

const NavBar: React.FC = ()=> {
    const [links, setLinks] = useState([
        {id:1, text: "Главная", href: ""},
        {id:2, text: "Курсы", href: ""},
        {id:3, text: "Бесплатные уроки", href: ""},
        {id:4, text: "Блог", href: ""},
        {id:5, text: "О нас", href: ""},
    ])

    return(
        <header className={styles.header}>
            <div className={styles.nav_containers}>
              <a className={styles.logo}>
                Fat<span className={styles.logo__accent}>( )</span>Code</a>
              <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <HeaderLinks links={links}/>
                </ul>
              </nav>
              <LoginNavbar/>
            </div>
        </header>
)}


export default NavBar;