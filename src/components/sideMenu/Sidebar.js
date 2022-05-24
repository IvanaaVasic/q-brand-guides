import React, { useState } from "react";
import MenuCSS from "./Menu.module.css";
import { SidebarDataPresentations } from "./SidebarDataPresentations";
import { SidebarDataDesign } from "./SideBarDataDesign";
import { SidebarDataBrand } from "./SideBarDataBrand";
import Logo from "../../assets/Logo.png";
import HederNavContainer from "./HeaderNavContainer";

const Sidebar = () => {
  const [activeId, setActiveId] = useState();

  return (
    <div className={MenuCSS.container}>
      <div className={MenuCSS.wrapper}>
        <img src={Logo} alt="Logo" className={MenuCSS.logo} />
        <HederNavContainer
          data={SidebarDataBrand}
          smallNavTTitle={"THE BRAND"}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
        <HederNavContainer
          data={SidebarDataDesign}
          smallNavTTitle={"DESIGN"}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
        <HederNavContainer
          data={SidebarDataPresentations}
          smallNavTTitle={"PRESENTATIONS"}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
      </div>
    </div>
  );
};

export default Sidebar;
