import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Product Summary : { }</h3>
                <h3>Selected Items :{cart.length}</h3>
            </div>

        </div>
    );
};

export default Shop;