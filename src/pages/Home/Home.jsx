import React from "react";
import Container from "../../components/Container/Container";
import styles from "./Home.module.css";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <ProductList />
      </main>
    </>
  );
};

export default Home;
