import React from 'react';

const RightCard = (props) => {
    const {cart} = props;
    const shippingCost = 15;
    
    let total = 0
    total = cart.reduce((previous,product) =>  previous+ product.price,0)
    // for(const products of cart)
    // {
    //     total = total+ products.price
    // }

    let tax = (total + shippingCost)*10;
    return (
        <div className='right_card'>
            <h1>Order Summary</h1>
            <h3>Item Orderd: {props.cart.length}</h3>
            <h3>Price: ${total}</h3>
            <h3>Shipping Cost: ${shippingCost}</h3>
            <h3>Tax: {tax}</h3>
            <h3>Total: {total + shippingCost + tax}</h3>
            
        </div>
    );
};

export default RightCard;