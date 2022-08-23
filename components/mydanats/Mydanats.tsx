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