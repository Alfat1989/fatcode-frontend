import React from "react";
import {number} from "prop-types";

type ListType = {
    [text: string]: any
    item?: any
}

// Array<TextType>
type TextType = {
    text: string
    id: number
}

 const TextList = ({text}: ListType) => {
    return (
        <>
            {text.map(item: TextType => {
                return <li key={item.id}>
                        <a>{item.text}</a>
                    </li>
            })}
        </>
    )
}

export default TextList;