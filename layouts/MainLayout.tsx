import React from "react";
import NavBar from "../components/header/NavBar";

const MainLayout: React.FC = ({children})=>{
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
};

export default MainLayout;