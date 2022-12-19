import React from "react";
import styles from "./Hero.module.css";
import wildlifeBG from "../../../public/assets/images/wildlife-background.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        alt="background"
        src={wildlifeBG}
        fill={true}
        className={styles.hero__image}
      />
      <div className={styles.hero__container}>
        <h2 className={styles.hero__header}>Survival</h2>
        <p className={styles.hero__info}>
          What this means is that we exist to help protect our environment and
          do in numbers of ways. You can save the planet by donation.
        </p>
        <button className={styles.hero__button}>Donate</button>
      </div>
    </div>
  );
};

export default Hero;
