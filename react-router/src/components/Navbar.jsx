import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-blue-900 text-white rounded'>
        <div>
            <h1 className='text-xl font-bold'>LOGO</h1>
        </div>
        <div className='flex gap-12 font-semibold'>
            <NavLink to={'/'} className='cursor-pointer'>Home</NavLink>
            <NavLink to={'/cart'} className='cursor-pointer'>Cart</NavLink>
            <NavLink to={'/about'} className='cursor-pointer'>About</NavLink>
        </div>
        <div className='text-[18px]'>
            Login
        </div>
    </div>
  )
}

export default Navbar