function ProductCard({ product, toggleCart }) {

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2">
          ₹ {product.price}
        </p>

        <button
          onClick={() => toggleCart(product.id)}
          className={`mt-5 w-full py-2 rounded-lg text-white font-semibold transition
            ${
              product.inCart
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
        >
          {product.inCart ? "Remove from Cart" : "Add to Cart"}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;