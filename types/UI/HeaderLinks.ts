interface Link{
    id: number;
    text: string;
    href: string;
}

export interface LinkProps{
    links: Link[];
}