import React from "react";
import HeadingCSS from "./Heading.module.css";

const BigHeading = ({ text }) => {
  return <h1 className={HeadingCSS.big_heading}>{text}</h1>;
};

export default BigHeading;
