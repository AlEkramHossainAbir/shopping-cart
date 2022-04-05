// using localstorage as database

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = (cart) =>{
    localStorage.setItem('shopping_cart',JSON.stringify(cart))
}


const addToDb = (id)=>{
    const isExist = getDb();
    let shopping_cart = {}
    
    if(!isExist)
    {
       shopping_cart[id] =1;
    }
    else{
        shopping_cart = JSON.parse(isExist)
        if(shopping_cart[id])
        {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount
        }
        else{
            shopping_cart[id] = 1 ;
        }
    }
    updateDb(shopping_cart)
     
}


const removeFromDb = (id) =>{
    const isExist = getDb();
    if(!isExist)
    {

    }
    else{
        const shopping_cart = JSON.parse(isExist);
        delete shopping_cart[id]; 
        updateDb(shopping_cart)
    }
  
    
}

export {addToDb,removeFromDb}