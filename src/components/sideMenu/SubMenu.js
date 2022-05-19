import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuCSS from "./Menu.module.css";

const SubMenu = ({ item, setupActiveId, activeState }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const [activeId, setActiveId] = useState();
  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => setActive(!isActive);
  const handleNav = () => {
    if (item.subNav) {
      showSubnav();
    }
    // toggleClass();
    setupActiveId(0);
    setupActiveId(item.id);
  };

  return (
    <>
      <Link
        to={item.path}
        onClick={handleNav}
        className={activeState === item.id ? MenuCSS.active : MenuCSS.navigation}
      >
        <div>
          {item.icon}
          <span>{item.title}</span>
        </div>
      </Link>

      {item.subNav && subnav && (
        <div className={MenuCSS.mid_navigation_wrapper}>
          {item.subNav.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={activeId === item.id ? MenuCSS.active_mid_nav : MenuCSS.mid_navigation}
                onClick={() => setActiveId(item.id)}
              >
                <span className={activeId === item.id ? MenuCSS.active_bullet_icon : MenuCSS.bullet_icon}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SubMenu;
