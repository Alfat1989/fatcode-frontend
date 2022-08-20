import {ReactNode} from "react";

export interface Link{
    id: number;
    text: string;
    href: string;
}

export interface Props{
    links: Link[];
}

export interface Child{
    children?: string|ReactNode
}
