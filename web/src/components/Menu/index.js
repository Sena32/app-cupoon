import React from "react";
import { Link } from "react-router-dom";
//import { MdShoppingBasket } from 'react-icons/md';

import { Container, Nav } from "./styles";

function Menu() {
  return (
    <Container>
      <Link to="/">
        <h1>Cupoon</h1>
      </Link>
      <Nav>
        <li>
          <Link to="/Cupons">
            <span>Cupons</span>
          </Link>
        </li>
      </Nav>
    </Container>
  );
}

export default Menu;
