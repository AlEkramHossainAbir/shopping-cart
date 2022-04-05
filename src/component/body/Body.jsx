import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Card from '../card/LeftCard';
import RightCard from '../card/RightCard';
import './Body.css'

const Body = () => {
    const [items, setItems] = useState([]);
    const [price,setPrice] = useState(0);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const addItem = (product) =>{
        setPrice(product.price)
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='body'>
            <div className='left_body'>
                {
                    items.map(item=> <Card key={item.id} item={item} addItem={addItem}/>)
                   
                }
                
            </div>
            <div className='right_body'>
                <RightCard price={price} cart={cart}/>
            </div>
        </div>
    );
};

export default Body;