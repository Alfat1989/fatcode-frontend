import React from "react";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import {store} from '../store';
import "@csstools/normalize.css";
import SignupUser from "./signup";
import LoginUser from "./login";
import Link from "next/link";


const Index =()=>{
    return(
        <Provider store={store}>
            <MainLayout>
                <Link href="profile/1">profile</Link>
                <SignupUser />
                <LoginUser />
                <Link href="profile/profilemydanats">donats</Link>
            </MainLayout>
        </Provider>
    )
}

export default Index;