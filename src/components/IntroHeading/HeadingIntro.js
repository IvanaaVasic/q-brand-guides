import React from "react";
import HeadingIntroCSS from "./HeadingIntro.module.css";
import SubHeading from "../elements/headings/SubHeading";
import BigHeading from "../elements/headings/BigHeading";
import Paragraph from "../elements/paragraph/Paragraph";

const HeadingIntro = ({ info }) => {
  return (
    <div className={HeadingIntroCSS.wrapper}>
      <div className={HeadingIntroCSS.sub_heading}>
        <SubHeading text={info.smallHeading} />
      </div>
      <div className={HeadingIntroCSS.heading}>
        <BigHeading text={info.heading} />
      </div>
      <div className={HeadingIntroCSS.description}>
        <Paragraph text={info.description} />
      </div>
    </div>
  );
};

export default HeadingIntro;
