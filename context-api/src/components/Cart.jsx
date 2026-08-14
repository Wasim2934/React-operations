const Cart = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 rounded">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Shopping Cart</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                {/* Image */}
                <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-28 object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="mb-3 text-sm capitalize text-gray-500">
                    {item.category}
                  </p>

                  <p className="text-xl font-bold text-gray-900">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
