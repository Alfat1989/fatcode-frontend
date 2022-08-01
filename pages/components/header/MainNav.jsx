import React, { useState } from "react";
import Login  from "./components/Login";
import styles from "./styles/style.module.sass";
import icon from "../../assets/icon_nav/FatCode.svg";
import Image from 'next/image'

export default function MainNav(){
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