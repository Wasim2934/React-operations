import { createContext, useState, useEffect } from "react";

const MyStore = createContext();

const MyStoreProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

    
  const incrementQuantity = (id) => {
    console.log(id);
    
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    incrementQuantity
  }

  return <MyStore.Provider value={value}>
            {children}
        </MyStore.Provider>;
};

export { MyStore, MyStoreProvider };
