import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Cart from "./components/Cart";
import { MyStore } from "./context/MyStore";
import axios from 'axios'

const App = () => {

  const {setCartItems, setIsCartOpen, cartItems, isCartOpen} = useContext(MyStore)

  const [products, setProducts] = useState([])

  const getStoreData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data);
    
    setProducts(res.data)
  }

  useEffect(() => {
    getStoreData()
  }, [])

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar setIsCartOpen={setIsCartOpen} />

      <div className="grid grid-cols-5 gap-3">
        {isCartOpen ? (
          <div className="w-screen px-10">
          <Cart cartItems={cartItems} />
          </div> 
        ) : (
          products.map((items) => {

            let isInCart = cartItems.find((val) => val.id === items.id)            

            return <UserCard key={items.id} product={items} setCartItems={setCartItems} isInCart={isInCart} />;
          })
        )}
      </div>
    </div>
  );
};

export default App;
