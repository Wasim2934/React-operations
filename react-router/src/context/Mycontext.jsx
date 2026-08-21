import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MyStore = createContext()

export const MyStoreProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const getProductsData = async () => {
        let res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }

    useEffect(() => {
        getProductsData()
    }, [])

    return <MyStore.Provider value={{products, setProducts, getProductsData}}>{children}</MyStore.Provider>
}
