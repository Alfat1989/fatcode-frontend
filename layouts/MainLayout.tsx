import React from "react";
import NavBar from "../components/header/componentsHeader/NavBar";

const MainLayout: React.FC = ({children})=>{
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
};

export default MainLayout;