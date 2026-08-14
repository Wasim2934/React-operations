import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const UserCard = ({ product, setCartItems }) => {   

  return (
    <div className="flex flex-col justify-around w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <div className="text-right">
            <p className="text-yellow-500">
              ⭐ {product.rating.rate}
            </p>
            <p className="text-xs text-gray-400">
              {product.rating.count} reviews
            </p>
          </div>
        </div>

        {/* Button */}
        <button onClick={() => setCartItems(prev => [...prev, product])} className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default UserCard;