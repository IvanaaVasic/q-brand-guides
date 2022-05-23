import React from "react";
import SubHeading from "../headings/SubHeading";
import CardCSS from "./Cards.module.css";

const CardColor = ({ info }) => {
  return (
    <div className={CardCSS.color_wrapper}>
      <SubHeading text={info.subtitle} />
      <div className={CardCSS.color_info_wrapper} style={{ backgroundColor: info.background, border: info.border }}>
        <div className={CardCSS.color_company_name} style={{ color: info.color }}>
          {info.company_name}
        </div>
        <div className={CardCSS.color_hex} style={{ color: info.color }}>
          {info.hex}
        </div>
      </div>
    </div>
  );
};

export default CardColor;
