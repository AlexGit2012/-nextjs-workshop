import React from "react";
import styles from "./AnimalItem.module.css";
import Image from "next/image";
import Link from "next/link";

export type AnimalItemType = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  animal: AnimalItemType;
};

const AnimalItem = ({ animal }: Props) => {
  const { title, description, image } = animal;
  return (
    <Link href={`/blog/${title}`} passHref className={styles.animalItem__link}>
      <div className={styles.animalItem}>
        <Image
          src={image}
          alt={title}
          className={styles.animalItem__image}
          width={150}
          height={100}
        />
        <span className={styles.animalItem__description}>{description}</span>
      </div>
    </Link>
  );
};

export default AnimalItem;
