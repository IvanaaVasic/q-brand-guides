import React from "react";
import SubHeading from "../headings/SubHeading";
import CardContainerCSS from "./CardContainer.module.css";
import { createContext } from "react";
export const CardContext = createContext();

const CardContainer = ({ cardInfos, subText, children }) => {
  return (
    <div className={CardContainerCSS.container}>
      {subText !== "" && (
        <div className={CardContainerCSS.subheading_wrapper}>
          <SubHeading text={subText} />
        </div>
      )}

      {cardInfos.map((info) => {
        return (
          <CardContext.Provider value={info} key={info.id}>
            <div className={CardContainerCSS.card_wrapper} key={info.id}>
              {children}
            </div>
          </CardContext.Provider>
        );
      })}
    </div>
  );
};

export default CardContainer;
