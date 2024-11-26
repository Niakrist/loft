import React from "react";
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";
import styles from "./HeaderInfoNavDelivery.module.css";

const HeaderInfoNavDelivery = () => {
  return (
    <Link to="/delivery" className={styles.delivery}>
      <Icon name="delivery" className={styles.deliveryIcon} />
      <span className={styles.deliveryText}>Доставка</span>
    </Link>
  );
};

export default HeaderInfoNavDelivery;
