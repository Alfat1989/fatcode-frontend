import React, { JSXElementConstructor, useState } from "react";
import Login  from "./LoginNavbar";
import icon from "../../public/icon_nav/FatCode.svg";
import Image from 'next/image';
import "../../styles/variables.module.sass";
import styles from '../../styles/Header.module.sass';
import TextList from "../../layouts/TextList";
import LoginNavbar from "./LoginNavbar";



const stylesM = {
    width: 100
}

const NavBar: React.FC = ()=> {
    const [links, setLinks] = useState([
        {id:1, text: "Главная", href: "/"},
        {id:2, text: "Курсы", href: "/courses"},
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
                <TextList text={links}/>
            </ul>
          </nav>
  
          <LoginNavbar/>
        </div>
      </header>
)}


export default NavBar;