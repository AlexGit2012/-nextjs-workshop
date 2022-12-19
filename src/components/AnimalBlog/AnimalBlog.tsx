import AnimalItem, { AnimalItemType } from "components/AnimalItem/AnimalItem";
import React from "react";
import styles from "./AnimalBlog.module.css";

type Props = {
  animalList: Array<AnimalItemType>;
};

const AnimalBlog = ({ animalList }: Props) => {
  return (
    <div className={styles.animalList}>
      <div className={styles.animalList__container}>
        {animalList &&
          animalList.map(({ title, ...animal }) => (
            <AnimalItem animal={{ title, ...animal }} key={title} />
          ))}
      </div>
    </div>
  );
};

export default AnimalBlog;
