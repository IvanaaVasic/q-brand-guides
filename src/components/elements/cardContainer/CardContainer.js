import React from "react";
import CardColor from "../cards/CardColor";
import CardTypeScale from "../cards/CardTypeScale";
import CardTypeStack from "../cards/CardTypeStack";
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
          <div className={CardContainerCSS.card_wrapper} key={info.id}>
            {cardType === "type_stack" && <CardTypeStack info={info} />}
            {cardType === "type_scale" && <CardTypeScale info={info} />}
            {cardType === "color" && <CardColor info={info} />}
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
