import React from "react";

const ProductListing = (props) => {
  
    return (
      <div id="grid-container">
        {props.productListing.map((item, idx) => (
          <div className="grid-item" key={item.id}>
            <p className="title"> Name: {item.name} </p>
            <p className="size"> Size: {item.size} </p>
            <p className="price"> Price: {item.price} </p>
            <p className="description">              
               Description: {item.description.substring(0, 40) + '...'} 
               </p>
            
            <button
              className="addCart"
              name='cartButton'
              onClick={e => props.handleAddToCart(e, item)}> Add to Cart </button>
              <button 
              className="quick"
              onClick={e => props.handleQuickView(e, item)}> Quickview </button>
          </div>
        ))}
      </div>
    );
  }

export default ProductListing;
