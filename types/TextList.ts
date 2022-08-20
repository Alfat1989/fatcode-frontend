import {number} from "prop-types";

interface Text{
    id: number;
    text: string;
    href?: string;
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

