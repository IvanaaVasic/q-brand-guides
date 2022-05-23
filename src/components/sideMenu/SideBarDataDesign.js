import React from "react";
import { VscCircleFilled } from "react-icons/vsc";

export const SidebarDataDesign = [
  {
    title: "Brand identity",
    path: "/design/brandIdentity",
    id: 2,
  },
  {
    title: "Typography",
    path: "/design/typography",
    id: 3,

    subNav: [
      {
        title: "Type stack",
        path: "/design/typography#type-stack",
        icon: <VscCircleFilled />,
        cName: "sub-nav",
        id: 1,
      },
      {
        title: "Type scale",
        path: "/design/typography#type-scale",
        icon: <VscCircleFilled />,
        cName: "sub-nav",
        id: 2,
      },
      {
        title: "Color in typography",
        path: "/design/typography#color",
        icon: <VscCircleFilled />,
        id: 3,
      },
      {
        title: "Example pairings",
        path: "/design/typography#example-pairings",
        icon: <VscCircleFilled />,
        id: 4,
      },
      {
        title: "Line width",
        path: "/design/typography#line-width",
        icon: <VscCircleFilled />,
        id: 5,
      },
    ],
  },

  {
    title: "Color",
    path: "/design/color",
    id: 4,
  },
  {
    title: "Layout",
    path: "/design/layout",
    id: 5,
  },
];
