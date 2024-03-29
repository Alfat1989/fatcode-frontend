import React from "react";
import MainLayout from "../../layouts/MainLayout";
import LeftMenu from "../../components/profile/LeftMenu";
import {MainPageProfile} from "../../layouts/profile/MainPageProfile"
import ProfileMyDanats from "./ProfileMyDanats";


export const UserId = ()=>{
    return (
        <MainLayout>
            <LeftMenu/>
            <MainPageProfile>
                <ProfileMyDanats/>
            </MainPageProfile>
        </MainLayout>
    )
}

export default UserId;