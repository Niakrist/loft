import React from "react";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";

import styles from "./HeaderInfoNav.module.css";
import HeaderInfoNavPhone from "../HeaderInfoNavPhone/HeaderInfoNavPhone";
import HeaderInfoNavDelivery from "../HeaderInfoNavDelivery/HeaderInfoNavDelivery";

const HeaderInfoNav = () => {
  return (
    <div className={styles.headerInfoNav}>
      <Container className={styles.headerInfoNavContainer}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link} to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/about">
                О нас
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <HeaderInfoNavPhone />
          <HeaderInfoNavDelivery />
        </div>
      </Container>
    </div>
  );
};

export default HeaderInfoNav;
