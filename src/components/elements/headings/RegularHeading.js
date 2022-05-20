import React from "react";
import HeadingCSS from "./Heading.module.css";

const RegularHeading = ({ text }) => {
  return <h2 className={HeadingCSS.regular_heading}>{text}</h2>;
};

export default RegularHeading;
