interface Text{
    id: number;
    text: string;
    Url?: string|undefined;
    href?: string|undefined;
    img?: string;
}[]


interface  TextsLists {
    text: Array<Text>;
    href?: string;
    style?: StyleSheet;
}

interface  TextImgList extends TextsLists{
    img?: string;
}

export type TextList = TextsLists | TextImgList

