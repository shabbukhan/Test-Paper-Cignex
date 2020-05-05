import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const cartItems = props.cartItems;
  return (
    <header>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/Cart">Cart ({cartItems.length}) </Link>
      </nav>
    </header>
  )  
}

export default Header;
