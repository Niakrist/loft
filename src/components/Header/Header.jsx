import React from "react";

import styles from "./Header.module.css";
import { HeaderInfoNav, HeaderNav, HeaderSearch } from ".";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header>
      <HeaderInfoNav />
      <Container>
        <HeaderSearch />
        <HeaderNav />
      </Container>
    </header>
  );
};

export default Header;
