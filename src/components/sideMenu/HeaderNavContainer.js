import React from "react";
import MenuCSS from "./Menu.module.css";
import SubMenu from "./SubMenu";

const HederNavContainer = ({ data, smallNavTTitle, setupActiveId, activeState }) => {
  return (
    <div className={MenuCSS.header_subheader_container}>
      <p className={MenuCSS.small_navigation}>{smallNavTTitle}</p>
      {data.map((item, index) => {
        return <SubMenu item={item} key={index} setupActiveId={setupActiveId} activeState={activeState} />;
      })}
      <span className={MenuCSS.line}></span>
    </div>
  );
};

export default HederNavContainer;
