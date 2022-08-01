import Image from "next/image";
import React from "react";
import pen from "../../../assets/icon_nav/Vector.svg";

export default function Login(){
    return(
        <div>
            <div>
                <Image src={pen} alt="pen" />
            </div>
        </div>
    )
}