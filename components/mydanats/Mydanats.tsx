import React, { useState } from "react";
import svg from './symbol-defs.svg'
import TextList from "./components/TextList";
import {TitleDanats} from "./components/Title";
import {ParagraphDanats} from "./components/ParagraphDanats";
import {ButtonDanats} from "./components/ButtomDanats";
import {PawsDanats} from "./components/PawsDanats";
import {TitleTitleDanats} from "./components/TextTitleDanats";
import {ImageDanats} from "./components/ImageDanats";

// собирает все компонеты страницы MyDanats
const MyDanats = () => {
  const [list, setList] = useState([
    {text: 'Профиль', id: 1},
    {text: 'Мой питомец', id: 2},
    {text: 'Мои курсы', id: 3},
    {text: 'Мои ментора', id: 4},
    {text: 'Мои донаты', id: 5},
    {text: 'Мои заметки', id: 6},
    {text: 'Вопрос-ответ', id: 7},
  ]
    ); 

  return (
    <div>
      <div >
        <div>
          <ul>
            <TextList text={list}/>
          </ul>
          <div>
            <TitleDanats />
            <ParagraphDanats />
            <ButtonDanats />
          </div>
        </div>
      </div>
      <PawsDanats />
      <div>
        <TitleTitleDanats />
      </div>
      <div>
          <ImageDanats />
          <ImageDanats />
      </div>
    </div>
  );
};


export default MyDanats;