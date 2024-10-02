


////////////////////////////////////////////


import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart</h2>
      
      {items.length === 0 ? (
        <p className='empty-cart'>No items in the cart.</p>
      ) : (
        <div className='cart-content'>
          <div className='cart-header'>
            <h3>Dish Name</h3>
            <h3>Dish ID</h3>
            <h3>Quantity</h3>
            <h3>Cost</h3>
          </div>
          
          <div className='cart-items'>
            {items.map((item) => (
              <div key={item.id} className='cart-item'>
                <h4>{item.name}</h4>
                <h4>#{item.id}</h4>
                <h4>{item.quantity}</h4>
                <h4>₹{(item.price * item.quantity).toFixed(2)}</h4>
                {/* toFixed(2)-->two decimal places */}
              </div>
            ))}
          </div>

          <div className='cart-total'>
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
