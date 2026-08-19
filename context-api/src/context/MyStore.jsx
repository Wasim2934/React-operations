import { createContext, useState, useEffect } from "react";

const MyStore = createContext();

const MyStoreProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        })
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    incrementQuantity,
    decrementQuantity
  };

  return <MyStore.Provider value={value}>{children}</MyStore.Provider>;
};

export { MyStore, MyStoreProvider };
