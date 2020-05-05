import React from 'react';

const CartListing = (props) => {

        const { cartItems } = props;
        return (
            <article id="cartContent">
            {cartItems.length ?
            <div><ul>
                    {cartItems.map((item) => (
                            <li key={item.id}>
                                <span>Name: {item.name}</span><br />
                                <span>Size: {item.size}</span><br />
                                <span>Price: {item.price}</span>
                                <i title='Remove from cart' className="fa fa-trash-o btn-danger fa-2x fa-pull-right" onClick={(e) => props.handleRemoveFromCart(e, item)} aria-hidden="true"></i>
                                <br />
                            </li>))
                    }
                    </ul>                                
    </div> : <h3>Your Cart is empty.</h3>}
    </article>
)
}

export default CartListing;
