import React from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

const ProductItem = ({ product }) => {
  console.log("product: ", product);
  return (
    <article>
      <div className={styles.productItem}>
        <button className={styles.button}>
          <Icon name="wishList" className={styles.wishList} />
        </button>

        <img
          className={styles.img}
          src={product.images[0]}
          alt={product.title}
        />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.groups}>{product.groups}</p>
        <p className={styles.price}>{product.price}0₽</p>
      </div>
    </article>
  );
};

export default ProductItem;
