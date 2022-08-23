import React, { useState } from "react";
import svg from './symbol-defs.svg'
import TextList from "../../layouts/TextList";
import {TitleDanats} from "../../layouts/Title";
import {ParagraphDanats} from "../../layouts/ParagraphDanats";
import {ButtonDanats} from "../../layouts/ButtomDanats";
import {PawsDanats} from "../../layouts/PawsDanats";
import {TitleTitleDanats} from "../../layouts/TextTitleDanats";
import {ImageDanats} from "../../layouts/ImageDanats";


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