import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import pen from "../../public/icon_nav/Vector.svg";
import styles from "../../styles/Header.module.sass";


export default function LoginNavbar(){
    const router = useRouter()
    return(
        <>
        <div className={styles.help}>
            <svg className={styles.help__icon} width="40" height="43">
              <use
                href="./images/icons/main_icons.svg#edit_icon"
              ></use>
            </svg>
            <a className={styles.help__btn}>Помощь</a>
          </div>
          <div className={styles.user}>
            <a className={styles.user__btn} href="#">
              <img className={styles.user__img}
                src="./images/profile@1x.jpg"
                alt="account"/>
            </a>
          </div>
        </>
    )
}