const Navbar = ({setIsCartOpen}) => {
  return (
    <div className='flex justify-between p-5 bg-amber-700 text-white rounded'>
        <div>
            <h1 className='text-xl font-bold'>LOGO</h1>
        </div>
        <div className='flex gap-12 font-semibold'>
            <p onClick={() => setIsCartOpen(false)} className='cursor-pointer'>Home</p>
            <p onClick={() => setIsCartOpen(true)} className='cursor-pointer'>Cart</p>
        </div>
        <div className='text-[18px]'>
            Login
        </div>
    </div>
  )
}

export default Navbar