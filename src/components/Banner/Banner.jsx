import React, { useState } from "react";
import { clsx } from "../../utils/clsx";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import styles from "./Banner.module.css";
import Slide from "./Slide/Slide";
const sliderInfo = [
  {
    id: "1",
    title: "Loft мебель",
    description: "Современная и удобная мебель в Анапе",
    link: "/",
    linkText: "СМОТРЕТЬ КАТАЛОГ",
    image: "./promo1.jpg",
  },
  {
    id: "2",
    title: "Новая коллекция",
    description: "Лучшие диваны для гостинной",
    link: "/",
    linkText: "СМОТРЕТЬ КАТАЛОГ",
    image: "./promo2.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (type) => {
    if (type === "next") {
      setCurrentSlide(currentSlide + 1);
    } else if (type === "prev") {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section>
      <Container>
        <div className={styles.banner}>
          <Slide slide={sliderInfo[currentSlide]} />
          <button
            disabled={currentSlide === 0}
            onClick={() => handleClick("prev")}
            className={clsx(styles.button, styles.buttonLeft)}>
            <Icon name="arrowSlide" className={styles.left} />
          </button>
          <button
            disabled={currentSlide === sliderInfo.length - 1}
            onClick={() => handleClick("next")}
            className={clsx(styles.button, styles.buttonRight)}>
            <Icon name="arrowSlide" className={styles.right} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
