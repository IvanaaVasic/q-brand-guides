import React from "react";
import MenuCSS from "./Menu.module.css";
import { SidebarDataPresentations } from "./SidebarDataPresentations";
import { SidebarDataDesign } from "./SideBarDataDesign";
import { SidebarDataBrand } from "./SideBarDataBrand";
import Logo from "../../assets/Logo.png";
import HederNavContainer from "./HeaderNavContainer";

const Sidebar = () => {
  return (
    <div className={MenuCSS.container}>
      <div className={MenuCSS.wrapper}>
        <img src={Logo} alt="Logo" className={MenuCSS.logo} />
        <HederNavContainer data={SidebarDataBrand} smallNavTTitle={"THE BRAND"} />
        <HederNavContainer data={SidebarDataDesign} smallNavTTitle={"DESIGN"} />
        <HederNavContainer data={SidebarDataPresentations} smallNavTTitle={"PRESENTATIONS"} />
      </div>
    </div>
  );
};

export default Sidebar;
