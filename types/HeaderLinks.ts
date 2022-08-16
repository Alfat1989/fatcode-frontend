interface Link{
    id: number;
    text: string;
    href: string;
}

export interface Props{
    links: Link[];
}