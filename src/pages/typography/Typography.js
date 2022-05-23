import React from "react";
import Illustration from "../../components/illustrationHeading/Illustration";
import HeadingIntro from "../../components/IntroHeading/HeadingIntro";
import TypographyCSS from "./Typography.module.css";
import IllustrationImage from "../../assets/typography_illustration.png";
import CardContainer from "../../components/elements/cardContainer/CardContainer";
import HeadingDescription from "../../components/sectionHeadingDescription/HeadingDescription";
import TypeStackImageBold from "../../assets/type_stack_bold.png";
import TypeStackImageRegular from "../../assets/type_stack_regular.png";
import CardTypeStack from "../../components/elements/cards/CardTypeStack";
import Line from "../../components/elements/line/Line";

const Typography = () => {
  const headingInformation = {
    smallHeading: "DESIGN",
    heading: "Typography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non commodo, id et eu augue. Id semper eget vel faucibus tortor elementum amet. Penatibus feugiat metus purus, habitant vitae commodo phasellus habitasse sed. Leo dolor elit sed orci nulla ullamcorper.",
  };
  const typeStackSectionInfo = {
    heading: "Type stack",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non commodo, id et eu augue. Id semper eget vel faucibus tortor elementum amet. Penatibus feugiat metus purus, habitant vitae commodo phasellus habitasse sed. Leo dolor elit sed orci nulla ullamcorper.",
  };

  const typeStackFirstCardInfo = [
    { title: "Montserrat bold", info_paragraph: "This font is used for headlines", id: 1, image: TypeStackImageBold },
  ];
  const typeStackSecondCardInfo = [
    {
      title: "Montserrat regular",
      info_paragraph: "This font is used for content and navigation.",
      id: 2,
      image: TypeStackImageRegular,
    },
  ];

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
      <div className={TypographyCSS.type_stack_section}>
        <div className={TypographyCSS.type_stack_heading}>
          <HeadingDescription heading={typeStackSectionInfo.heading} paragraph={typeStackSectionInfo.paragraph} />
        </div>
        <div className={TypographyCSS.type_stack_card_container_wrapper}>
          <div className={TypographyCSS.card_containers}>
            <CardContainer cardInfos={typeStackFirstCardInfo} cardType={"type_stack"} subText={"TYPE STACK"} />
          </div>
          <div className={TypographyCSS.card_containers}>
            <CardContainer cardInfos={typeStackSecondCardInfo} cardType={"type_stack"} subText={"TYPE STACK"} />
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
};

export default Typography;
