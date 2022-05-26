import React from "react";
import HeadingDescriptionCSS from "./HeadingDescription.module.css";
import RegularHeading from "../elements/headings/RegularHeading";
import Paragraph from "../elements/paragraph/Paragraph";

const HeadingDescription = ({ heading, paragraph, info }) => {
  return (
    <div className={HeadingDescriptionCSS.container}>
      <div className={HeadingDescriptionCSS.header}>
        <RegularHeading text={info.heading} />
      </div>
      <div className={HeadingDescriptionCSS.paragraph}>
        <Paragraph text={info.paragraph} />
      </div>
    </div>
  );
};

export default HeadingDescription;
