import React from "react";
import HeadingCSS from "./Heading.module.css";

const SubHeading = ({ text }) => {
  return <h4 className={HeadingCSS.sub_heading}>{text}</h4>;
};

export default SubHeading;
