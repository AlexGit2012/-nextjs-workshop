import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Menu.module.css";
import {Routes} from "../../constants/routes";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <CustomLink name={"Blog"} href={Routes.blog} />
      <CustomLink name={"Contacts"} href={Routes.contacts} />
    </div>
  );
};

export default Menu;
