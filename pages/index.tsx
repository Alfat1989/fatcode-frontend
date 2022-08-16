import React from "react";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import {store} from '../store';
import "@csstools/normalize.css";
import AuthUsers from "./signup";

const Index =()=>{
    return(
        <Provider store={store}>
            <MainLayout />
            <AuthUsers />
        </Provider>
    )
}

export default Index;