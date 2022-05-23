import React from "react";
import SubHeading from "../headings/SubHeading";
import CardCSS from "./Cards.module.css";

const CardPairing = ({ info }) => {
  return (
    <div className={CardCSS.pairing_wrapper}>
      <SubHeading text={info.subtitle} />
      <div className={CardCSS.pairing_info_wrapper}>
        {info.id === 1 && (
          <div className={`${CardCSS.type_scale_headline1} ${CardCSS.pairing_margin}`}>{info.big_headline}</div>
        )}
        {info.id === 1 && <div className={CardCSS.type_scale_headline3}>{info.small_headline}</div>}
        {info.id === 2 && (
          <div className={`${CardCSS.type_scale_headline2} ${CardCSS.pairing_margin}`}>{info.big_headline}</div>
        )}
        {info.id === 2 && <div className={CardCSS.type_scale_paragraph1}>{info.small_headline}</div>}
      </div>
    </div>
  );
};

export default CardPairing;
