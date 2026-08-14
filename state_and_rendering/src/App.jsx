import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {

const [products, setProducts] = useState([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "https://picsum.photos/300?random=1",
    category: "Electronics",
    rating: 4.5,
    inCart: false,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 1499,
    image: "https://picsum.photos/300?random=2",
    category: "Accessories",
    rating: 4.3,
    inCart: false,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 3999,
    image: "https://picsum.photos/300?random=3",
    category: "Accessories",
    rating: 4.8,
    inCart: false,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5999,
    image: "https://picsum.photos/300?random=4",
    category: "Wearables",
    rating: 4.6,
    inCart: false,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://picsum.photos/300?random=5",
    category: "Audio",
    rating: 4.4,
    inCart: false,
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 899,
    image: "https://picsum.photos/300?random=6",
    category: "Office",
    rating: 4.2,
    inCart: false,
  },
  {
    id: 7,
    name: "USB-C Hub",
    price: 1799,
    image: "https://picsum.photos/300?random=7",
    category: "Accessories",
    rating: 4.1,
    inCart: false,
  },
  {
    id: 8,
    name: "Portable SSD",
    price: 6999,
    image: "https://picsum.photos/300?random=8",
    category: "Storage",
    rating: 4.9,
    inCart: false,
  },
  {
    id: 9,
    name: "Fitness Band",
    price: 2499,
    image: "https://picsum.photos/300?random=9",
    category: "Wearables",
    rating: 4.3,
    inCart: false,
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 2999,
    image: "https://picsum.photos/300?random=10",
    category: "Electronics",
    rating: 4.5,
    inCart: false,
  },
  {
    id: 11,
    name: "Wireless Charger",
    price: 1299,
    image: "https://picsum.photos/300?random=11",
    category: "Mobile",
    rating: 4.2,
    inCart: false,
  },
  {
    id: 12,
    name: "Noise Cancelling Earbuds",
    price: 3499,
    image: "https://picsum.photos/300?random=12",
    category: "Audio",
    rating: 4.6,
    inCart: false,
  },
  {
    id: 13,
    name: "LED Desk Lamp",
    price: 999,
    image: "https://picsum.photos/300?random=13",
    category: "Home",
    rating: 4.1,
    inCart: false,
  },
  {
    id: 14,
    name: "Monitor 24 Inch",
    price: 10999,
    image: "https://picsum.photos/300?random=14",
    category: "Electronics",
    rating: 4.7,
    inCart: false,
  },
  {
    id: 15,
    name: "Gaming Chair",
    price: 8999,
    image: "https://picsum.photos/300?random=15",
    category: "Furniture",
    rating: 4.4,
    inCart: false,
  },
  {
    id: 16,
    name: "Power Bank 20000mAh",
    price: 2299,
    image: "https://picsum.photos/300?random=16",
    category: "Mobile",
    rating: 4.5,
    inCart: false,
  },
  {
    id: 17,
    name: "Smartphone Tripod",
    price: 799,
    image: "https://picsum.photos/300?random=17",
    category: "Photography",
    rating: 4.0,
    inCart: false,
  },
  {
    id: 18,
    name: "Wireless Printer",
    price: 7999,
    image: "https://picsum.photos/300?random=18",
    category: "Office",
    rating: 4.3,
    inCart: false,
  },
  {
    id: 19,
    name: "External Hard Drive",
    price: 5499,
    image: "https://picsum.photos/300?random=19",
    category: "Storage",
    rating: 4.6,
    inCart: false,
  },
  {
    id: 20,
    name: "Action Camera",
    price: 12499,
    image: "https://picsum.photos/300?random=20",
    category: "Photography",
    rating: 4.7,
    inCart: false,
  },
]);

  function toggleCart(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          inCart: !product.inCart,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  }

  const cartCount = products.filter(product => product.inCart).length;

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-indigo-600 text-white p-5 shadow">

        <div className="max-w-6xl mx-auto flex justify-between">

          <h1 className="text-3xl font-bold">
            Product Store
          </h1>

          <h2 className="text-xl">
            🛒 Cart : {cartCount}
          </h2>

        </div>

      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleCart={toggleCart}
          />
        ))}

      </div>

    </div>
  );
}

export default App;