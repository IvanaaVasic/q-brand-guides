import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuCSS from "./Menu.module.css";
import { HashLink } from "react-router-hash-link";

const SubMenu = ({ item, setupActiveId, activeState }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    if (activeState !== item.id) {
      setSubnav(false);
    } else {
      setSubnav(true);
    }
  }, [activeState, item.id]);

  const handleNav = () => {
    if (item.subNav) {
      showSubnav();
    }
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
              <HashLink
                smooth
                to={item.path}
                key={index}
                className={activeId === item.id ? MenuCSS.active_mid_nav : MenuCSS.mid_navigation}
                onClick={() => setActiveId(item.id)}
              >
                <span className={activeId === item.id ? MenuCSS.active_bullet_icon : MenuCSS.bullet_icon}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </HashLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SubMenu;
