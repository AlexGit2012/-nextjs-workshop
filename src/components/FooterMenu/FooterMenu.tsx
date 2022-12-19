import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./FooterMenu.module.css";

const FooterMenu = () => {
  return (
    <div className={styles.footerMenu}>
      <CustomLink name={"Articles"} />
      <CustomLink name={"About us"} />
      <CustomLink name={"Learn more"} />
    </div>
  );
};

export default FooterMenu;
