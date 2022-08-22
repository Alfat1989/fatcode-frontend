interface Input{
    label: string;
    name: string;
    type: string;
    id: number;
    tag_id: string
    placeholder: string;
}

export interface InputProps{
    inputs: Input[];
}


