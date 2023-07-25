import React, { useEffect } from "react";
import { useState } from "react";

export default function Cart({ cartItems, setCartItems, handleChange }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = () => {
    let ans = 0;
    cartItems.map((item) => (ans += item.qty * item.price));
    setTotalPrice(ans);
  };

  useEffect(() => {
    handleTotalPrice();
  });

  const handleRemove = (id)=> {
    const remove = cartItems.filter((item) => item.id !== id);
    setCartItems(remove);
  }


  return (
    <div className="cart">
      <div className="cart-items-empty">
        {cartItems.length === 0 && "No items are added"}
      </div>
      <div className="cart-items"></div>
      <div>
        {cartItems.map((item) => (
          <div className="cart-items-container">
            <div key={item.id} className="cart-items-list">
              <div className="cart-image">
                <img className="cart-items-image" src={item.image} alt="" />
                <h2>{item.foodName}</h2>
              </div>
              <div className="unit-price">
                <span>₱{item.price}.00</span>
              </div>
              <div className="qty">
                <button onClick={()=>handleChange(item, + 1)}>+</button>
                <div className="number">{item.qty}</div>
                <button onClick={()=>handleChange(item, - 1)}>−</button>
              </div>
              <div className="total-price">
                ₱{item.qty * item.price}.00
              </div>
              <div className="remove">
                <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && <div className="total">
        <span>
          <h2>Total price of your cart:</h2>
        </span>
        <span>
          <h2>₱{totalPrice}.00</h2>
        </span>
      </div>}
    </div>
  );
}
