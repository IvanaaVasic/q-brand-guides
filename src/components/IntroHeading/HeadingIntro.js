import React from "react";
import HeadingIntroCSS from "./HeadingIntro.module.css";
import SubHeading from "../elements/headings/SubHeading";
import BigHeading from "../elements/headings/BigHeading";
import Paragraph from "../elements/paragraph/Paragraph";

const HeadingIntro = ({ smallHeading, heading, description }) => {
  return (
    <div className={HeadingIntroCSS.wrapper}>
      <div className={HeadingIntroCSS.sub_heading}>
        <SubHeading text={smallHeading} />
      </div>
      <div className={HeadingIntroCSS.heading}>
        <BigHeading text={heading} />
      </div>
      <div className={HeadingIntroCSS.description}>
        <Paragraph text={description} />
      </div>
    </div>
  );
};

export default HeadingIntro;
