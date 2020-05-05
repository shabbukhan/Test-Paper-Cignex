import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListing from "./components/products/productListing";
import Sorting from "./components/Sorting";
import axios from "axios";
import Header from "./components/layout/Header";
import Cart from "./components/pages/Cart";
import QuickView from "./components/products/QuickView";
import {compareByProperty} from './util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      quickView: [],
      cartItems: []
    };
  }
  componentDidMount() {
    axios.get("./json/listing.json").then(res =>
      this.setState({
        items: res.data,
        filteredItems: res.data
      })
    );
    if (localStorage) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  handleAddToCart = (e, item ) => {
    console.log("handleAddToCart", item);

    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      if (cartItems.length) {
        cartItems.forEach(cartI => {
          if (cartI.id === item.id) {
            productAlreadyInCart = true;
          }
        });
      }

      if (!productAlreadyInCart) {
        cartItems.push({ ...item});
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleQuickView = (e, item) => {
    console.log("item", item);
    document.getElementById("quickView").classList.remove("hide");
    document.getElementById("close").classList.remove("hide");
    this.setState({
      quickView: [item]
    });
  };

  handleCloseCart = e => {
    document.getElementById("quickView").classList.add("hide");
    document.getElementById("close").classList.add("hide");
  };

  handleSortChange = e => {
    const items = this.state.items;
    const cartItems = this.state.cartItems;
    if (e.target.value === "highestprice") {
      const sortedProductsDec = items.sort(compareByProperty('price', 'DES'));
      const cartDec = cartItems.sort(compareByProperty('price', 'DES'));
      this.setState({
        items: sortedProductsDec,
        cartItems: cartDec
      });
    } else if (e.target.value === "lowestprice") {
      const sortedProductsAsc = items.sort(compareByProperty('price', 'ASC'));
      const cartAsc = cartItems.sort(compareByProperty('price', 'ASC'));
      this.setState({
        items: sortedProductsAsc,
        cartItems: cartAsc
      });
    } else {
      const productDefault = items.sort(compareByProperty('id', 'DES'));
      const cartDefault = cartItems.sort(compareByProperty('id', 'DES'));
      this.setState({
        items: productDefault,
        cartItems: cartDefault
      });
    }
  };

  render() {
    return (
      <Router>
        <Header cartItems={this.state.cartItems} />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <Sorting handleSortChange={this.handleSortChange} />
              <ProductListing
                productListing={this.state.items}
                handleQuickView={this.handleQuickView}
                handleAddToCart={this.handleAddToCart}
              />
              <QuickView
                closeCart={this.handleCloseCart}
                quickModal={this.state.quickView}
                handleAddToCart={this.handleAddToCart}
              />
            </React.Fragment>
          )}
        />
        <Route
          path="/Cart"
          render={props => (
            <Cart
              {...props}
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleSortChange={this.handleSortChange}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
