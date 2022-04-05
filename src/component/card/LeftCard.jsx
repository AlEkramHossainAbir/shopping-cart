import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props)
    const { name, img, price, quantity, ratings, seller, stock } = props.item
    return (
        <div className='card'>
            <div className='card_left'>
                <img src={img} alt="images of products" className='card_image' />
                <h1>{name}</h1>
                <p>{seller}</p></div>
            <div className='card_right'>
                <h1>Price: ${price}</h1>
                <h1>Quantity: {quantity}</h1>
                <h1>Ratings: {ratings}</h1>

                <h1>In Stock: {stock}</h1>
                <button onClick={() => props.addItem(props.item)} className="cartBtn">Add TO Cart</button>

            </div>
        </div>
    );
};

export default Card;