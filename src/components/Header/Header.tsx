import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
