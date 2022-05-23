import React from "react";
import CardCSS from "./Cards.module.css";

const CardLineWidth = ({ info }) => {
  return (
    <div className={CardCSS.line_width_wrapper}>
      <div className={`${CardCSS.line_width_heading} ${CardCSS.type_scale_headline3}`}>{info.headline}</div>
      <div className={`${CardCSS.line_width_paragraph} ${CardCSS.type_scale_paragraph1}`}>{info.paragraph}</div>
    </div>
  );
};

export default CardLineWidth;
