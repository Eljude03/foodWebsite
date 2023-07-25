import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import "./index.css";

import { useState } from "react";
import productItems from "./data/Data";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (item) => {
    let isPresent = false;
    cartItems.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCartItems([...cartItems, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cartItems.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cartItems;
    tempArr[ind].qty += d;

    if (tempArr[ind].qty === 0) tempArr[ind].qty = 1;
    setCartItems([...tempArr]);
  };

  return (
    <>
      <Header productItems={productItems} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route
          path="cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} handleChange={handleChange} />}
        />
      </Routes>
    </>
  );
}
