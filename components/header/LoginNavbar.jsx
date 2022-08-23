import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Header.module.sass";
import Link from "next/link";


export default function LoginNavbar(){
    //const router = useRouter()
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
              <Link href="/profile/1">
                  <a className={styles.user__btn}>
                  <img className={styles.user__img}
                       src="./images/profile@1x.jpg"
                       alt="account"/>
              </a>
              </Link>
          </div>
        </>
    )
}