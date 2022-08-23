import React, {useState} from "react";
import TextList from "../../layouts/TextList";
import styles from "./LeftMenu.module.sass";
import {LeftMenuText} from "../../data/TextsLists";


const LeftMenu = () =>{
    return(
        <div className={styles.LeftMenu}>
            <ul>
                <TextList text={LeftMenuText}/>
            </ul>
        </div>
    )
}

export default LeftMenu