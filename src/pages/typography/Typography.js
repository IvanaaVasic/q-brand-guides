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
  const colorSectionInfo = {
    heading: "Color in typography",
    paragraph:
      "The interface colors are the main sets of colors for a general website layout. Colors that pertain to navigations, section modules, general typography, and footers are in the realm of “interface colors.”",
  };

  const colorContainerCardsInfo = [
    {
      subtitle: "HEADLINES, PARAGRAPHS",
      company_name: "Quantox",
      hex: "#000000",
      id: 1,
      background: "#FFFFFF",
      color: "#000000",
      border: " 1px solid #EEEEEE",
    },
    {
      subtitle: "FOOTER",
      company_name: "Quantox",
      hex: "#6E6F72",
      id: 2,
      background: "#6E6F72",
      color: "#FFFFFF",
      border: "",
    },
    {
      subtitle: "CAPTIONS",
      company_name: "Quantox",
      hex: "#B5B5B5",
      id: 3,
      background: "#FFFFFF",
      color: "#B5B5B5",
      border: " 1px solid #EEEEEE",
    },
    {
      subtitle: "CAPTIONS",
      company_name: "Quantox",
      hex: "#98CA3E",
      id: 4,
      background: "#98CA3E",
      color: "#FFFFFF",
      border: "",
    },
  ];
  const pairingSectionInfo = {
    heading: "Example pairings",
    paragraph: "Here are some examples of typographic pairs that we commonly use on our marketing website.",
  };

  const pairingContainerCardsInfo = [
    {
      subtitle: "HEADLINE 1 + HEADLINE 3",
      big_headline: "Watch it in real time or on your own time",
      small_headline: "Quantox builds software for better customer relationships",
      id: 1,
    },
    {
      subtitle: "HEADLINE 2 + PARAGRAPH",
      big_headline: "Watch it in real time or on your own time",
      small_headline: "Quantox builds software for better customer relationships",
      id: 2,
    },
  ];
  const lineWidthSectionInfo = {
    heading: "Line width",
    paragraph:
      "Be conscious of the space between the beginning and end of a text box. It can be the difference between content that's easy to read and content that makes you cross-eyed.",
  };
  const lineWidthContainerCardsInfo = [
    {
      headline:
        "There’s an art to eating well and wisely, and membership service NatureBox saw an opportunity to make it easy. There’s an art to eating well and wisely, and membership service NatureBox saw an opportunity to make it easy.",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 1,
    },
  ];
  return (
    <div className={TypographyCSS.container}>
      <section className={TypographyCSS.intro_heading_image_wrapper}>
        <HeadingIntro
          smallHeading={headingInformation.smallHeading}
          heading={headingInformation.heading}
          description={headingInformation.description}
        />
        <Illustration image={IllustrationImage} />
      </section>
      <section className={TypographyCSS.type_stack_section} id="type-stack">
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
      </section>
      <section className={TypographyCSS.type_scale_section} id="type-scale">
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
              cardType={"type_scale"}
              subText={"FONT SIZE / LINESPACING – CLASSIFICATION"}
            />
          </div>
        </div>
        <Line />
      </section>
      <section className={TypographyCSS.color_section} id="color">
        <div className={TypographyCSS.color_heading}>
          <HeadingDescription heading={colorSectionInfo.heading} paragraph={colorSectionInfo.paragraph} />
        </div>
        <div className={TypographyCSS.color_container_wrapper}>
          <div className={TypographyCSS.card_containers}>
            <CardContainer cardInfos={colorContainerCardsInfo} cardType={"color"} subText={""} />
          </div>
        </div>
        <Line />
      </section>
      <section className={TypographyCSS.pairing_section} id="example-pairings">
        <div className={TypographyCSS.pairing_heading}>
          <HeadingDescription heading={pairingSectionInfo.heading} paragraph={pairingSectionInfo.paragraph} />
        </div>
        <div className={TypographyCSS.pairing_container_wrapper}>
          <div className={TypographyCSS.pairing_containers}>
            <CardContainer cardInfos={pairingContainerCardsInfo} cardType={"pairing"} subText={""} />
          </div>
        </div>
        <Line />
      </section>
      <section className={TypographyCSS.line_width_section} id="line-width">
        <div className={TypographyCSS.line_width_heading}>
          <HeadingDescription heading={lineWidthSectionInfo.heading} paragraph={lineWidthSectionInfo.paragraph} />
        </div>
        <div className={TypographyCSS.line_width_container_wrapper}>
          <div className={TypographyCSS.line_width_containers}>
            <CardContainer cardInfos={lineWidthContainerCardsInfo} cardType={"line_width"} subText={""} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Typography;
