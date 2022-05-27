import React from "react";
import Illustration from "../../components/illustrationHeading/Illustration";
import HeadingIntro from "../../components/IntroHeading/HeadingIntro";
import TypographyCSS from "./Typography.module.css";
import IllustrationImage from "../../assets/typography_illustration.png";
import CardContainer from "../../components/elements/cardContainer/CardContainer";
import HeadingDescription from "../../components/sectionHeadingDescription/HeadingDescription";
import Line from "../../components/elements/line/Line";
import SmallHeading from "../../components/elements/headings/SmallHeading";
import Paragraph from "../../components/elements/paragraph/Paragraph";
import Footer from "../../components/footer/Footer";
import CardTypeStack from "../../components/elements/cards/typography/CardTypeStack";
import CardTypeScale from "../../components/elements/cards/typography/CardTypeScale";
import CardColor from "../../components/elements/cards/typography/CardColor";
import CardLineWidth from "../../components/elements/cards/typography/CardLineWidth";
import CardPairing from "../../components/elements/cards/typography/CardPairing";
import { HeadingInformation } from "../../config/typography/HeadingInformation";
import { TypeStackHeading } from "../../config/typography/sectionHeadings/TypeStackHeading";
import { TypeScaleHeading } from "../../config/typography/sectionHeadings/TypeScaleHeading";
import { TypeScaleSubheading } from "../../config/typography/sectionHeadings/TypeScaleHeading";
import { ColorHeading } from "../../config/typography/sectionHeadings/ColorHeading";
import { PairingHeading } from "../../config/typography/sectionHeadings/PairingHeading";
import { LineWidthHeading } from "../../config/typography/sectionHeadings/LineWidthHeading";
import { TypeStackFirstContainerCardsInfo } from "../../config/typography/cardsInformation/TypeStackCardsInfo";
import { TypeStackSecondContainerCardsInfo } from "../../config/typography/cardsInformation/TypeStackCardsInfo";
import { TypeScaleCardsInfo } from "../../config/typography/cardsInformation/TypeScaleCardsInfo";
import { ColorCardsInfo } from "../../config/typography/cardsInformation/ColorCardsInfo";
import { PairingCardsInfo } from "../../config/typography/cardsInformation/PairingCardsInfo";
import { LineWidthCardsInfo } from "../../config/typography/cardsInformation/LineWidth";

const Typography = () => {
  return (
    <div className={TypographyCSS.container}>
      <div className={TypographyCSS.wrapper}>
        <section className={TypographyCSS.intro_heading_image_wrapper}>
          <HeadingIntro info={HeadingInformation} />
          <Illustration image={IllustrationImage} />
        </section>
        <section className={`${TypographyCSS.type_stack_section} ${TypographyCSS.section}`} id="type-stack">
          <div className={TypographyCSS.type_stack_heading}>
            <HeadingDescription info={TypeStackHeading} />
          </div>
          <div className={TypographyCSS.type_stack_card_container_wrapper}>
            <div className={TypographyCSS.card_containers}>
              <CardContainer cardInfos={TypeStackFirstContainerCardsInfo} subText={"TYPE STACK"}>
                <CardTypeStack />
              </CardContainer>
            </div>
            <div className={TypographyCSS.card_containers}>
              <CardContainer cardInfos={TypeStackSecondContainerCardsInfo} subText={"TYPE STACK"}>
                <CardTypeStack />
              </CardContainer>
            </div>
          </div>
        </section>
        <Line />
        <section className={`${TypographyCSS.type_scale_section} ${TypographyCSS.section}`} id="type-scale">
          <div className={TypographyCSS.type_scale_heading}>
            <HeadingDescription info={TypeScaleHeading} />
          </div>
          <div className={TypographyCSS.type_scale_subheading_wrapper}>
            <div className={TypographyCSS.type_scale_subheading}>
              <SmallHeading text={TypeScaleSubheading.title} />
            </div>
            <Paragraph text={TypeScaleSubheading.paragraph} />
          </div>
          <div className={TypographyCSS.type_scale_card_container_wrapper}>
            <div className={TypographyCSS.card_containers}>
              <CardContainer cardInfos={TypeScaleCardsInfo} subText={"FONT SIZE / LINESPACING – CLASSIFICATION"}>
                <CardTypeScale />
              </CardContainer>
            </div>
          </div>
        </section>
        <Line />
        <section className={`${TypographyCSS.color_section} ${TypographyCSS.section}`} id="color">
          <div className={TypographyCSS.color_heading}>
            <HeadingDescription info={ColorHeading} />
          </div>
          <div className={TypographyCSS.color_container_wrapper}>
            <div className={TypographyCSS.card_containers}>
              <CardContainer cardInfos={ColorCardsInfo} subText={""}>
                <CardColor />
              </CardContainer>
            </div>
          </div>
        </section>
        <Line />
        <section className={`${TypographyCSS.pairing_section} ${TypographyCSS.section}`} id="example-pairings">
          <div className={TypographyCSS.pairing_heading}>
            <HeadingDescription info={PairingHeading} />
          </div>
          <div className={TypographyCSS.pairing_container_wrapper}>
            <div className={TypographyCSS.pairing_containers}>
              <CardContainer cardInfos={PairingCardsInfo} subText={""}>
                <CardPairing />
              </CardContainer>
            </div>
          </div>
        </section>
        <Line />
        <section className={`${TypographyCSS.line_width_section} ${TypographyCSS.section}`} id="line-width">
          <div className={TypographyCSS.line_width_heading}>
            <HeadingDescription info={LineWidthHeading} />
          </div>
          <div className={TypographyCSS.line_width_container_wrapper}>
            <div className={TypographyCSS.line_width_containers}>
              <CardContainer cardInfos={LineWidthCardsInfo} subText={""}>
                <CardLineWidth />
              </CardContainer>
            </div>
          </div>
        </section>
        <section className={TypographyCSS.footer}>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Typography;
