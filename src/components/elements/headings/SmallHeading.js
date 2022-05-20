import React from "react";
import HeadingCSS from "./Heading.module.css";

const SmallHeading = ({ text }) => {
  return <h3 className={HeadingCSS.small_heading}>{text}</h3>;
};

export default SmallHeading;
