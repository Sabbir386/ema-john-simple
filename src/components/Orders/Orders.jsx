import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/reviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();

    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    savedCart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <div>From Orders</div>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;