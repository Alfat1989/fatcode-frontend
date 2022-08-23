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

  return (
    <div>
      <div >
        <div>
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