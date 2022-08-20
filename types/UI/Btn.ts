interface Button {
    content: string;
    type?: string;
    handler?: () => void;
}

export interface ButtonProps {
    buttons: Button[];
}
