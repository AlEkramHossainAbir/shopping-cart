import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props)
    const { name, img, price, quantity, ratings, seller, stock } = props.item
    return (
        <div className='card'>
            <div><img src={img} alt="images of products" className='card_image' />
            <h1>{name}</h1>
            <h1>{seller}</h1></div>
            <div>
                <h1>Price: {price}</h1>
                <h1>{quantity}</h1>
                <h1>{ratings}</h1>

                <h1>{stock}</h1>
                <button onClick={()=>props.addItem()}>Add TO Cart</button>
                
            </div> 
        </div>
    );
};

export default Card;