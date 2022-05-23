import React from "react";
import CartTypeStack from "../cards/CardTypeStack";
import SubHeading from "../headings/SubHeading";
import CardContainerCSS from "./CardContainer.module.css";

const CardContainer = ({ cardInfos, cardType, subText }) => {
  return (
    <div className={CardContainerCSS.container}>
      {subText !== "" && (
        <div className={CardContainerCSS.subheading_wrapper}>
          <SubHeading text={subText} />
        </div>
      )}

      {cardInfos.map((info) => {
        return (
          <div className={CardContainerCSS.card_wrapper}>
            {cardType === "type_stack" && <CartTypeStack info={info} />}
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
