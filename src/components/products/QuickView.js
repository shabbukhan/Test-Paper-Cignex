import React from "react";

const QuickView = (props) =>{

    return (
      <React.Fragment>
        <section id="quickView" className='hide'>
           
          <i id="close"
            className="fa fa-times-circle fa-3x hide"
            onClick={props.closeCart}
            aria-hidden="true"></i>          
          
          {props.quickModal.map((item, idx) => (
                <div key={item.id}>
                  <p className="title"> Name: {item.name} </p>
                  <p className="size"> Size: {item.size} </p>
                  <p className="price"> Price: {item.price} </p>
                  <p className="description">              
                    Description: {item.description} 
                    </p>
                    <button
                    className="button"
                    name='cartButton'
                    onClick={e => props.handleAddToCart(e, item, idx)}> Add to Cart </button>
                </div>
        ))}








        </section>
      </React.Fragment>
    );
  
}

export default QuickView;
