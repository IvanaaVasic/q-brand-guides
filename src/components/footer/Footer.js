import React from "react";
import FooterCSS from "./Footer.module.css";
import FooterLogo from "../../assets/footer_logo.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedIn.png";

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <img src={FooterLogo} alt="footer_logo" />
      <div className={FooterCSS.social_media_rights_container}>
        <div className={FooterCSS.social_media_icon_wrapper}>
          <img src={FacebookIcon} alt="facebook_logo" />
          <img src={InstagramIcon} alt="instagram_logo" />
          <img src={LinkedInIcon} alt="linkedIn_logo" />
        </div>
        <p className={FooterCSS.rights}>Quantox Technology 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
