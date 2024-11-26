import React, { useState } from "react";
import { Link } from "react-router-dom";
import { clsx } from "../../../utils/clsx";
import Icon from "../../Icon/Icon";
import styles from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };
  const handleBlur = () => {
    setIsActiveInput(false);
  };

  return (
    <div className={styles.headerSearch}>
      <Link to="/">
        <Icon name="logo" className={styles.logo} />
      </Link>

      <form
        className={styles.form}
        style={{ "--border-color": isActiveInput ? "#d74444" : "#e6e6e6" }}>
        <label className={styles.label} htmlFor="search">
          <Icon name="search" className={styles.search} />

          <input
            className={styles.input}
            type="search"
            placeholder="Поиск"
            id="search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
      </form>

      <div className={styles.profile}>
        <Link to="/wishlist">
          <Icon
            name="wishList"
            className={clsx(styles.wishlistIcon, styles.icon)}
          />
        </Link>
        <Link to="/cart">
          <Icon name="cart" className={clsx(styles.cartIcon, styles.icon)} />
        </Link>
        <Link to="/profile">
          <Icon
            name="profile"
            className={clsx(styles.profileIcon, styles.icon)}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderSearch;
