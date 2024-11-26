import React from "react";

import styles from "./HeaderNav.module.css";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { clsx } from "../../../utils/clsx";
const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon name="kitchen" className={styles.kitchenIcon} />{" "}
            <span>Кухни</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon name="bedroom" className={styles.bedroomIcon} />{" "}
            <span>Спальни</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon name="livingroom" className={styles.livingroomIcon} />{" "}
            <span>Гостинные</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon name="closet" className={styles.closetIcon} />{" "}
            <span>Прихожие</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon name="office" className={styles.officeIcon} />{" "}
            <span>Офисная мебель</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            {" "}
            <Icon
              name="childrensroom"
              className={styles.childrensroomIcon}
            />{" "}
            <span>Детская</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={clsx(styles.link, styles.linkActive)}>
            <span>Акция</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            <Icon name="etc" className={styles.etcIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
