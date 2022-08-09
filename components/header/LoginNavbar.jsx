import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import pen from "../../public/icon_nav/Vector.svg";

export default function LoginNavbar(){
    const router = useRouter()
    return(
        <div>
            <div>
                <Image src={pen} alt="pen" />
                <h2 onClick={()=>router.push("/profile/[id].tsx")}>Войти</h2>
            </div>
        </div>
    )
}