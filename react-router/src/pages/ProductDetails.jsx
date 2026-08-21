import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = ({ quantity = 1 }) => {
  const [singleProductData, setSingleProductData] = useState({});

  const { id } = useParams();

  const getProductDetails = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex min-h-112.5 items-center justify-center rounded-2xl bg-gray-100 p-10">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="max-h-100 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              {singleProductData.category}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {singleProductData.title}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-md bg-yellow-100 px-3 py-1 font-semibold text-yellow-700">
                ⭐ {singleProductData.rating?.rate}
              </span>

              <span className="text-sm text-gray-500">
                {singleProductData.rating?.count} reviews
              </span>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {singleProductData.description}
            </p>

            <div className="my-6 border-t" />

            <div>
              <p className="mb-3 font-semibold text-gray-800">Quantity</p>

              <div className="flex items-center gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl hover:bg-gray-100">
                  -
                </button>

                <span className="w-8 text-center text-lg font-semibold">
                  {quantity}
                </span>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>

            <button className="mt-7 w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800">
              Add to Cart
            </button>

            <button className="mt-3 w-full rounded-xl border border-black py-4 font-semibold text-black transition hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Product Description
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-600">
            {singleProductData.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-1 font-semibold capitalize text-gray-900">
                {singleProductData.category}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="mt-1 font-semibold text-gray-900">
                ⭐ {singleProductData.rating?.rate} / 5
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Reviews</p>
              <p className="mt-1 font-semibold text-gray-900">
                {singleProductData.rating?.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
