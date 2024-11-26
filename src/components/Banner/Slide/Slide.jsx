import React from "react";

import styles from "./Slide.module.css";

const Slide = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slide.title}</h2>
        <p className={styles.description}>{slide.description}</p>
        <button className={styles.button}>{slide.linkText}</button>
      </div>
      <img className={styles.img} src={slide.image} alt={slide.title} />
    </div>
  );
};

export default Slide;
