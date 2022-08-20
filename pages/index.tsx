import React from "react";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import {store} from '../store';
import "@csstools/normalize.css";
import Link from "next/link";

const Index =()=>{
    return (
        <Provider store={store}>
            <MainLayout/>
            <div>
                Main page
                <Link href='profile/ProfileMyDanats'>
                    Ссылка на страницу Мои донаты
                </Link>
            </div>
        </Provider>
    );
}

export default Index;