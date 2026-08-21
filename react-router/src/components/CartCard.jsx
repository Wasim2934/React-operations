const CartCard = ({product, quantity = 1}) => {

  return (
    <div className="flex w-full max-w-3xl items-center gap-5 rounded-xl border bg-white p-5 shadow-sm">

      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="mb-1 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-base font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-md border text-lg hover:bg-gray-100">
          -
        </button>

        <span className="font-semibold">{quantity}</span>

        <button className="flex h-8 w-8 items-center justify-center rounded-md border text-lg hover:bg-gray-100">
          +
        </button>
      </div>

      <button className="text-sm font-medium text-red-500 hover:text-red-700">
        Remove
      </button>
    </div>
  );
};

export default CartCard;