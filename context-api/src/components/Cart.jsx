const Cart = ({cartItems}) => {

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >
                  <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gray-50 sm:w-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-4 text-sm font-medium text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;