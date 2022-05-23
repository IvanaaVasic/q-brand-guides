import React from "react";
import Illustration from "../../components/illustrationHeading/Illustration";
import HeadingIntro from "../../components/IntroHeading/HeadingIntro";
import TypographyCSS from "./Typography.module.css";
import IllustrationImage from "../../assets/typography_illustration.png";
import CardContainer from "../../components/elements/cardContainer/CardContainer";
import HeadingDescription from "../../components/sectionHeadingDescription/HeadingDescription";
import TypeStackImageBold from "../../assets/type_stack_bold.png";
import TypeStackImageRegular from "../../assets/type_stack_regular.png";
import Line from "../../components/elements/line/Line";
import SmallHeading from "../../components/elements/headings/SmallHeading";
import Paragraph from "../../components/elements/paragraph/Paragraph";

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

  const typeScaleSectionInfo = {
    heading: "Type scale",
    paragraph:
      "Montserrat typographic scale for our website has different weights and styles to lay out responsive compositions for both desktop and mobile, as well as supporting our Montserrat brand narrative, voice, and tone.",
  };

  const typeScaleSubheadingInfo = {
    title: "4px system",
    paragraph:
      "The scale is based on an 8px system, where the type is largely divisible by 4. This mathematical approach to typography allows for clean relationships between headers, sub-heads, and body copy. When it comes to smaller sizes, the system is a little looser to allow for precise type specifications.",
  };

  const typeStackFirstContainerCardsInfo = [
    { title: "Montserrat bold", info_paragraph: "This font is used for headlines", id: 1, image: TypeStackImageBold },
  ];
  const typeStackSecondContainerCardsInfo = [
    {
      title: "Montserrat regular",
      info_paragraph: "This font is used for content and navigation.",
      id: 2,
      image: TypeStackImageRegular,
    },
  ];

  const typeScaleContainerCardsInfo = [
    {
      subtitle: "42px - Headline 1 - H1",
      content: "Quantox builds software for better customer relationships",
      id: 1,
    },
    {
      subtitle: "32px - Headline 2 - H2",
      content: "Quantox builds software for better customer relationships",
      id: 2,
    },
    {
      subtitle: "24px - Headline 3 - H3",
      content: "Quantox builds software for better customer relationships",
      id: 3,
    },
    {
      subtitle: "16px - Paragraph / Navigation",
      content: "Quantox builds software for better customer relationships",
      id: 4,
    },
    {
      subtitle: "12px - Caption",
      content: "Quantox builds software for better customer relationships",
      id: 5,
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
            <CardContainer
              cardInfos={typeStackFirstContainerCardsInfo}
              cardType={"type_stack"}
              subText={"TYPE STACK"}
            />
          </div>
          <div className={TypographyCSS.card_containers}>
            <CardContainer
              cardInfos={typeStackSecondContainerCardsInfo}
              cardType={"type_stack"}
              subText={"TYPE STACK"}
            />
          </div>
        </div>
        <Line />
      </div>
      <div className={TypographyCSS.type_scale_section}>
        <div className={TypographyCSS.type_scale_heading}>
          <HeadingDescription heading={typeScaleSectionInfo.heading} paragraph={typeScaleSectionInfo.paragraph} />
        </div>
        <div className={TypographyCSS.type_scale_subheading_wrapper}>
          <div className={TypographyCSS.type_scale_subheading}>
            <SmallHeading text={typeScaleSubheadingInfo.title} />
          </div>
          <Paragraph text={typeScaleSubheadingInfo.paragraph} />
        </div>
        <div className={TypographyCSS.type_scale_card_container_wrapper}>
          <div className={TypographyCSS.card_containers}>
            <CardContainer
              cardInfos={typeScaleContainerCardsInfo}
              cardType={"type_slack"}
              subText={"FONT SIZE / LINESPACING – CLASSIFICATION"}
            />
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
};

export default Typography;
