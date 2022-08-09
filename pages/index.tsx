import React from "react";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import {store} from '../store';
import "@csstools/normalize.css";

const Index =()=>{
    return(
        <Provider store={store}>
            <MainLayout/>
            <div>
                Main page
            </div>
        </Provider>
    )
}

export default Index;