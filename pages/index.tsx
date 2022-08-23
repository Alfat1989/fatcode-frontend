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
        <MainLayout>
            <Link href="profile/1">profile</Link>
            <SignupUser />
            <LoginUser />
        </MainLayout>
    )
}

export default Index;