import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
