import React from "react";
import Link from "next/link";
import { Url } from "url";
import styles from "./CustomLink.module.css";

type Props = {
  name: string;
  href?: string;
};

const CustomLink = ({ name, href = "/" }: Props) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.headerLink}>{name}</a>
    </Link>
  );
};

export default CustomLink;
