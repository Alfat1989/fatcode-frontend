interface Button {
    id: number;
    content: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    handler?: () => void;
}

export interface ButtonProps {
    buttons: Button[];
}
