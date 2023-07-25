import { useState, createContext } from 'react';
import productItems from '../data/Data';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i < productItems.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);

    const addToCart = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems (
                cartItems.map((item) => item.id === product.id ? 
                {...ProductExist, quantity: ProductExist.quantity + 1}
                : item)
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        };
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {cartItems, addToCart, removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};
