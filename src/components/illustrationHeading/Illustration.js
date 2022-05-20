import React from "react";
import IllustrationCSS from "./Illustration.module.css";

const Illustration = ({ image }) => {
  return (
    <div className={IllustrationCSS.wrapper}>
      <div className={IllustrationCSS.illustration} style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};

export default Illustration;
