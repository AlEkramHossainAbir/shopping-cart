import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Card from '../card/LeftCard';
import RightCard from '../card/RightCard';
import './Body.css'

const Body = () => {
    let [items, setItems] = useState([]);
    let [price,setPrice] = useState(0);
    let [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    useEffect(()=>{
        const saveCart = getStoredCard();
        console.log(saveCart)
        for(const keys in saveCart)
        {
            const addedProduct = items.find(product => product.key === keys );
            console.log(keys, addedProduct)
        }
        
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