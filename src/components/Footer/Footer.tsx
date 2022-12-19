import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import FooterMenu from "../FooterMenu/FooterMenu";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo isLogoShow={false} />
        <FooterMenu />
      </div>

      <div className={styles.footer__rights}>
        Copyright 2022 © Wildlife. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
