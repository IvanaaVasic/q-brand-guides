import React from "react";
import Paragraph from "../../paragraph/Paragraph";
import CardCSS from "./Cards.module.css";
import { useContext } from "react";
import { CardContext } from "../../cardContainer/CardContainer";

const CartTypeStack = () => {
  const info = useContext(CardContext);

  return (
    <div className={CardCSS.type_stack_wrapper}>
      <div className={CardCSS.type_stack_info_wrapper}>
        <h3 className={info.id === 1 ? CardCSS.type_stack_heading_bold : CardCSS.type_stack_heading_regular}>
          {info.title}
        </h3>
        <Paragraph text={info.info_paragraph}></Paragraph>
      </div>
      <div className={CardCSS.type_stack_image_wrapper}>
        <img src={info.image} alt="type stack" className={CardCSS.type_stack_image} />
      </div>
    </div>
  );
};

export default CartTypeStack;
