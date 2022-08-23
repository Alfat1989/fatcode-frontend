import React, { JSXElementConstructor, useState } from "react";
import "../../styles/variables.module.sass";
import styles from '../../styles/Header.module.sass';
import TextList from "../mydanats/components/TextList";
import LoginNavbar from "./LoginNavbar";
import {NavBarText} from "../../data/TextsLists";


const NavBar: React.FC = ()=> {
    const [links, setLinks] = useState(NavBarText)

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