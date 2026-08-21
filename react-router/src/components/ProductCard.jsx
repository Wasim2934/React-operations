import { useContext } from "react";
import { MyStore } from "../context/Mycontext";
import { useNavigate } from "react-router";

const ProductCard = ({product}) => {  

  const {setCartItems} = useContext(MyStore)
  
  const navigate = useNavigate()

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, product] )
  }

  return (
    <div className="cursor-pointer w-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
        <img onClick={() => navigate(`/product/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        
        <p className="mb-2 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {product.rating?.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating?.count} reviews)
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-2xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button onClick={handleAddToCart} className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;