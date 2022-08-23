import React from "react";
import MainLayout from "../../layouts/MainLayout";
import LeftMenu from "../../components/profile/LeftMenu";
import {MainPageProfile} from "./MainPageProfile"
import {Child} from "../../types/HeaderLinks";


const User = ({children}:Child)=>{
    return (
        <MainLayout>
            <LeftMenu/>
            <MainPageProfile>
                {children}
            </MainPageProfile>
        </MainLayout>
    )
}

export default User