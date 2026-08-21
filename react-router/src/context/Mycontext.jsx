import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MyStore = createContext()

export const MyStoreProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    const getProductsData = async () => {
        let res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }

    const value = {
        products, 
        setProducts, 
        cartItems,
        setCartItems
    }


    useEffect(() => {
        getProductsData()
    }, [])

    return <MyStore.Provider value={value}>{children}</MyStore.Provider>
}
