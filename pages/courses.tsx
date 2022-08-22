import React from "react";
import MainLayout from "../layouts/MainLayout";
import CreateCours from "./CreateCours";
import Link from "next/link";

const Courses = () => {
    return(
        <MainLayout>
            <Link href="/CreateCours">Создать курс</Link>
        </MainLayout>
    )
}

export default Courses