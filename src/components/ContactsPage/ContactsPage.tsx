import React from "react";
import styles from "./ContactsPage.module.css";
import Image from "next/image";

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__info}>
          <h3 className={styles.contacts__header}>Contact us:</h3>
          <p className={styles.contacts__paragraph}>
            0284 Schowalter Falls, North Bo, Florida, 58351, telephone
            323-645-4115, mobile 785-726-4972
          </p>
          <h3 className={styles.contacts__header}>About:</h3>
          <p className={styles.contacts__paragraph}>
            Sed non lacus eros. Nam nisl nulla, feugiat quis dapibus id, dictum
            vitae nulla. Nunc lacinia a eros nec dictum. Quisque fermentum lacus
            lacus, rhoncus venenatis turpis lobortis vel. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut
            vitae odio tristique, tempor nisi eget, maximus nibh. Proin eu orci
            finibus, eleifend mauris non, pellentesque neque
          </p>
        </div>
        <Image
          priority
          className={styles.contacts__image}
          src={
            "https://www.fosterandpartners.com/media/2632372/hero_1195_fp316856.jpg?width=1920&quality=85"
          }
          alt="house"
          width={860}
          height={478}
          // objectFit={"cover"}
          // layout={"response"}
        />
      </div>
    </div>
  );
};

export default ContactsPage;
