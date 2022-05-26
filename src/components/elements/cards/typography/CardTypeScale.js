import React from "react";
import SubHeading from "../../headings/SubHeading";
import CardCSS from "./Cards.module.css";
import { useContext } from "react";
import { CardContext } from "../../cardContainer/CardContainer";

const CardTypeScale = () => {
  const info = useContext(CardContext);

  return (
    <div className={CardCSS.type_scale_wrapper}>
      <div className={CardCSS.type_scale_subhead_wrapper}>
        <SubHeading text={info.subtitle} />
      </div>
      {info.id === 1 && <div className={CardCSS.type_scale_headline1}>{info.content}</div>}
      {info.id === 2 && <div className={CardCSS.type_scale_headline2}>{info.content}</div>}
      {info.id === 3 && <div className={CardCSS.type_scale_headline3}>{info.content}</div>}
      {info.id === 4 && <div className={CardCSS.type_scale_paragraph1}>{info.content}</div>}
      {info.id === 4 && <div className={CardCSS.type_scale_paragraph2}>{info.content}</div>}
      {info.id === 5 && <div className={CardCSS.type_scale_caption}>{info.content}</div>}
    </div>
  );
};

export default CardTypeScale;
