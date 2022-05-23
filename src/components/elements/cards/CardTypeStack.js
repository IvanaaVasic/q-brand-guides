import React from "react";
import Paragraph from "../paragraph/Paragraph";
import CardCSS from "./Cards.module.css";
// import TypeStackImage from "../../../assets/type_stack_bold.png";

const CartTypeStack = ({ info }) => {
  return (
    <div className={CardCSS.type_stack_wrapper}>
      <div className={CardCSS.type_stack_info_wrapper}>
        <h3 className={info.id === 1 ? CardCSS.type_stack_heading_bold : CardCSS.type_stack_heading_regular}>
          {info.title}
        </h3>
        <Paragraph text={info.info_paragraph}></Paragraph>
      </div>
      <div className={CardCSS.type_stack_image_wrapper}>
        <div className={CardCSS.type_stack_image} style={{ backgroundImage: `url(${info.image})` }}></div>
      </div>
    </div>
  );
};

export default CartTypeStack;
