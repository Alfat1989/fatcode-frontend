import React, { JSXElementConstructor, useState } from "react";
import Login  from "./LoginNavbar";
import icon from "../../public/icon_nav/FatCode.svg";
import Image from 'next/image';
import styles from '../../styles/NavBar.module.sass';

const NavBar: React.FC = ()=>{
    const [login, setLogin] = useState()
    return(
        <div className={styles.main}> 
        <Image src={icon} alt="icon"/>
       <div className={styles.ul}>
       <ul>
            <li>
                <a href="#">Главная</a>
            </li>
            <li>
                <a>Курсы</a>
            </li>
            <li>
               <a>Бесплатные уроки</a>
            </li>
            <li>
                <a>Блог</a>
            </li>
            <li>
                <a>О нас</a>
            </li>
            {/*<Login/>*/}
        </ul>
       </div>
    </div>
)}


export default NavBar