import React, { useContext } from 'react'
import { MyStore } from '../context/Mycontext'
import CartCard from '../components/CartCard'

const Cart = () => {

  const {cartItems} = useContext(MyStore)  

  return (
    <div className='flex flex-col gap-5 p-10'>
      {cartItems.map((item) => {
        return <CartCard key={item.id} product={item} />
      })}
    </div>
  )
}

export default Cart