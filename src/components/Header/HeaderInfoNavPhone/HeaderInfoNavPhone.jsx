import React from "react";
import Icon from "../../Icon/Icon";

import styles from "./HeaderInfoNavPhone.module.css";

const HeaderInfoNavPhone = () => {
  return (
    <a href="tel:+79648999119" className={styles.phone}>
      <Icon name="phone" className={styles.phoneIcon} />
      <span className={styles.phoneText}>8 (964) 89 99 119</span>
    </a>
  );
};

export default HeaderInfoNavPhone;
