import React, { useContext } from 'react'
import { MyStore } from '../context/Mycontext'
import ProductCard from '../components/ProductCard';

const Home = () => {

  const {products} = useContext(MyStore);
  console.log(products);
  

  return (
    <div className='mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />
      })}
    </div>
  )
}

export default Home