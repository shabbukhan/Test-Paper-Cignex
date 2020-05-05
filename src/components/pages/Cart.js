import React from "react";

import CartListing from "../cart/CartListing";
import Sorting from '../Sorting'

const Cart = props => {

      return (
      <React.Fragment>
        <section id="cartContainer">
          <Sorting handleSortChange={props.handleSortChange} />
          <CartListing
            cartItems={props.cartItems}
            handleRemoveFromCart={props.handleRemoveFromCart}
          />
        </section>
      </React.Fragment>
    );
  }

  export default Cart;
