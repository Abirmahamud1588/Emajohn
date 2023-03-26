import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products, setProuducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then (data => setProuducts(data))
    },[])
    return (
        <div className='shopcontainer'>
            <div className='product'>
                <h1>product : {products.length}</h1>
            </div>
            <div className='order'>
                <h1>oder</h1>
            </div>
            
        </div>
    );
};

export default Shop;