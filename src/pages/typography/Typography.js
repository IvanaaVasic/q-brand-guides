import React from "react";
import Illustration from "../../components/illustrationHeading/Illustration";
import HeadingIntro from "../../components/IntroHeading/HeadingIntro";
import TypographyCSS from "./Typography.module.css";
import IllustrationImage from "../../assets/typography_illustration.png";
const Typography = () => {
  const headingInformation = {
    smallHeading: "DESIGN",
    heading: "Typography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non commodo, id et eu augue. Id semper eget vel faucibus tortor elementum amet. Penatibus feugiat metus purus, habitant vitae commodo phasellus habitasse sed. Leo dolor elit sed orci nulla ullamcorper.",
  };
  return (
    <div className={TypographyCSS.container}>
      <div className={TypographyCSS.intro_heading_image_wrapper}>
        <HeadingIntro
          smallHeading={headingInformation.smallHeading}
          heading={headingInformation.heading}
          description={headingInformation.description}
        />
        <Illustration image={IllustrationImage} />
      </div>
    </div>
  );
};

export default Typography;
