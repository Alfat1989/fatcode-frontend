import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import pen from "../../../public/icon_nav/Vector.svg";
import styles from "../../../styles/Header.module.sass";


export default function LoginNavbar(){
    const router = useRouter()
    return(
        <>
            <div className={styles.help}>
                <a className={styles.help__btn}>Помощь</a>
            </div>
            <div className={styles.user}>
                <a className={styles.user__btn} href="#"></a>
            </div>
        </>
    )
}