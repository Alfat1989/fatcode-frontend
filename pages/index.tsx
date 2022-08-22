import React from "react";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import {store} from '../store';
import "@csstools/normalize.css";
import SignupUser from "./signup";
import LoginUser from "./login";

const Index =()=>{
    return(
        <Provider store={store}>
            <MainLayout>
                <SignupUser />
                <LoginUser />
            </MainLayout>
        </Provider>
    )
}

export default Index;