import React, { useState } from "react";
import MenuCSS from "./Menu.module.css";
import { SidebarDataPresentations } from "../../config/sidebarData/SidebarDataPresentations";
import { SidebarDataDesign } from "../../config/sidebarData/SideBarDataDesign";
import { SidebarDataBrand } from "../../config/sidebarData/SideBarDataBrand";
import { SidebarSmallNav } from "../../config/sidebarData/SideBarSmallNav";
import Logo from "../../assets/Logo.png";
import HederNavContainer from "./HeaderNavContainer";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoMobileNav from "../../assets/footer_logo.png";

const Sidebar = () => {
  const [activeId, setActiveId] = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggleMobileNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  console.log(isNavExpanded);

  return (
    <div className={MenuCSS.container}>
      <div className={MenuCSS.mobileNav}>
        <img src={LogoMobileNav} alt="logo mobile navigation" />
        <span className={MenuCSS.hamburger} onClick={toggleMobileNav}>
          <GiHamburgerMenu />
        </span>
      </div>
      <div className={isNavExpanded ? `${MenuCSS.wrapper} ${MenuCSS.expanded}` : MenuCSS.wrapper}>
        <img src={Logo} alt="Logo" className={MenuCSS.logo} />
        <HederNavContainer
          data={SidebarDataBrand}
          smallNavTTitle={SidebarSmallNav.brand}
          setupActiveId={setActiveId}
          activeState={activeId}
          mobileNavHandler={setIsNavExpanded}
          toggleMobileNav={toggleMobileNav}
        />
        <HederNavContainer
          data={SidebarDataDesign}
          smallNavTTitle={SidebarSmallNav.design}
          setupActiveId={setActiveId}
          activeState={activeId}
          mobileNavHandler={setIsNavExpanded}
          toggleMobileNav={toggleMobileNav}
        />
        <HederNavContainer
          data={SidebarDataPresentations}
          smallNavTTitle={SidebarSmallNav.presentation}
          setupActiveId={setActiveId}
          activeState={activeId}
          setIsNavExpanded={setIsNavExpanded}
          toggleMobileNav={toggleMobileNav}
        />
      </div>
    </div>
  );
};

export default Sidebar;
