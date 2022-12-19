import React from "react";
import wildlifeLogoImg from "../../../public/assets/images/wildlife-logo.png";
import Image from "next/image";
import styles from "./Logo.module.css";
import Link from "next/link";

type Props = {
  isLogoShow?: boolean;
};

const Logo = ({ isLogoShow = true }: Props) => {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className={styles.logo}>
        {isLogoShow && <Image src={wildlifeLogoImg} alt="logo" />}
        <div className={styles.logo__title}>WILDLIFE</div>
      </a>
    </Link>
  );
};

export default Logo;
