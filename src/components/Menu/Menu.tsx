import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <CustomLink name={"Blog"} href={"/blog"} />
      <CustomLink name={"Contacts"} href={"/contacts"} />
    </div>
  );
};

export default Menu;
