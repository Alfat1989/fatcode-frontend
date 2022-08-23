import React from "react";
import NavBar from "../components/header/componentsHeader/NavBar";
import {Child} from "../types/HeaderLinks";

const MainLayout: React.FC<Child> = ({children})=>{
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
};

export default MainLayout;