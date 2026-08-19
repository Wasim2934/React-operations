import React, { useState } from "react";

const Cart = ({cartItems}) => {

  console.log(cartItems);
  

  // // Increase quantity
  // const increaseQuantity = (id) => {
  //   setCartItems((items) =>
  //     items.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // };

  // // Decrease quantity
  // const decreaseQuantity = (id) => {
  //   setCartItems((items) =>
  //     items.map((item) =>
  //       item.id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  // Remove item
  // const removeItem = (id) => {
  //   setCartItems((items) => items.filter((item) => item.id !== id));
  // };

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
            
            {/* Cart Products */}
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gray-50 sm:w-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-32 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity */}
                    <div className="mt-5 flex items-center gap-3">
                      <button
                        // onClick={() => decreaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        // onClick={() => increaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
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