import { createContext, useState, useEffect } from "react";

const MyStore = createContext();

const MyStoreProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(() => {
    try {
      const stored = localStorage.getItem("isCartOpen");
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("isCartOpen", JSON.stringify(isCartOpen));
    } catch {}
  }, [cartItems], [isCartOpen]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems
  }

  return <MyStore.Provider value={value}>
            {children}
        </MyStore.Provider>;
};

export { MyStore, MyStoreProvider };
