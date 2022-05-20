import React from "react";
import ParagraphCSS from "./Paragraph.module.css";

const Paragraph = ({ text }) => {
  return <p className={ParagraphCSS.paragraph}>{text}</p>;
};

export default Paragraph;
