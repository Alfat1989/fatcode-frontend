import React from "react";
import NavBar from "../components/header/NavBar";
import {Child} from "../types/HeaderLinks";

const MainLayout: React.FC = ({children}: Child)=>{
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
};

export default MainLayout;