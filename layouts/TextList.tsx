import React from "react";
import {number} from "prop-types";

// type ListType = {
//     text: string,
//     id: number
// }

 const TextList = ({text}) => {
    return (
        <>
            {text.map(item => {
                return <li key={item.id}>
                        <a>{item.text}</a>
                    </li>
            })}
        </>
    )
}


export default TextList;