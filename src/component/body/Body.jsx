import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Body.css'

const Body = () => {
    const [items, setItems] = useState([]);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const addItem = () =>{
        setCount(count+1);
        console.log(count);
    }

    return (
        <div className='body'>
            <div className='left_body'>
                {
                    items.map(item=> <Card key={item.id} item={item} addItem={addItem}/>)
                   
                }
                
            </div>
            <div className='right_body'><h1>This is Body 2</h1></div>
        </div>
    );
};

export default Body;