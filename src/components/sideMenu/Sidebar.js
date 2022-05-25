import React, { useState } from "react";
import MenuCSS from "./Menu.module.css";
import { SidebarDataPresentations } from "../../config/sidebarData/SidebarDataPresentations";
import { SidebarDataDesign } from "../../config/sidebarData/SideBarDataDesign";
import { SidebarDataBrand } from "../../config/sidebarData/SideBarDataBrand";
import { SidebarSmallNav } from "../../config/sidebarData/SideBarSmallNav";
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
          smallNavTTitle={SidebarSmallNav.brand}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
        <HederNavContainer
          data={SidebarDataDesign}
          smallNavTTitle={SidebarSmallNav.design}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
        <HederNavContainer
          data={SidebarDataPresentations}
          smallNavTTitle={SidebarSmallNav.presentation}
          setupActiveId={setActiveId}
          activeState={activeId}
        />
      </div>
    </div>
  );
};

export default Sidebar;
