import React, { useState } from "react";

export default function Product() {
  const Products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 25.99,
      image: "https://placehold.co/600x400?text=Wireless+Mouse",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 59.99,
      image: "https://placehold.co/600x400?text=Mechanical+Keyboard",
    },
    {
      id: 3,
      name: "HD Monitor",
      price: 149.99,
      image: "https://placehold.co/600x400?text=HD+Monitor",
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: 19.99,
      image: "https://placehold.co/600x400?text=USB-C+Hub",
    },
    {
      id: 5,
      name: "External SSD",
      price: 89.99,
      image: "https://placehold.co/600x400?text=External+SSD",
    },
    {
      id: 6,
      name: "Webcam 1080p",
      price: 39.99,
      image: "https://placehold.co/600x400?text=Webcam+1080p",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 45.0,
      image: "https://placehold.co/600x400?text=Bluetooth+Speaker",
    },
    {
      id: 8,
      name: "Smartphone Stand",
      price: 12.49,
      image: "https://placehold.co/600x400?text=Smartphone+Stand",
    },
    {
      id: 9,
      name: "Wireless Charger",
      price: 22.95,
      image: "https://placehold.co/600x400?text=Wireless+Charger",
    },
    {
      id: 10,
      name: "Gaming Headset",
      price: 69.99,
      image: "https://placehold.co/600x400?text=Gaming+Headset",
    },
    {
      id: 11,
      name: "Laptop Sleeve",
      price: 18.0,
      image: "https://placehold.co/600x400?text=Laptop+Sleeve",
    },
    {
      id: 12,
      name: "Ergonomic Chair",
      price: 199.99,
      image: "https://placehold.co/600x400?text=Ergonomic+Chair",
    },
    {
      id: 13,
      name: "Graphic Tablet",
      price: 79.5,
      image: "https://placehold.co/600x400?text=Graphic+Tablet",
    },
    {
      id: 14,
      name: "Noise Cancelling Earbuds",
      price: 59.0,
      image: "https://placehold.co/600x400?text=Noise+Cancelling+Earbuds",
    },
    {
      id: 15,
      name: "LED Desk Lamp",
      price: 29.99,
      image: "https://placehold.co/600x400?text=LED+Desk+Lamp",
    },
    {
      id: 16,
      name: "Portable Projector",
      price: 129.99,
      image: "https://placehold.co/600x400?text=Portable+Projector",
    },
    {
      id: 17,
      name: "Action Camera",
      price: 99.95,
      image: "https://placehold.co/600x400?text=Action+Camera",
    },
    {
      id: 18,
      name: "Fitness Tracker",
      price: 49.9,
      image: "https://placehold.co/600x400?text=Fitness+Tracker",
    },
    {
      id: 19,
      name: "Wireless Router",
      price: 75.0,
      image: "https://placehold.co/600x400?text=Wireless+Router",
    },
    {
      id: 20,
      name: "Smartwatch",
      price: 119.0,
      image: "https://placehold.co/600x400?text=Smartwatch",
    },
  ];

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = Products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.price <= maxPrice
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      />

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="200"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
        <p className="text-sm text-gray-600">Max Price: ${maxPrice}</p>
      </div>

      <div className="mb-6 text-right font-bold text-3xl text-blue-900">
        Cart Items: {cart.length}
      </div>

       {filteredProducts.length === 0 ? (
        <p className="text-start text-dark text-lg mb-50">
          No results found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredProducts.map((item) => (
    <div
      key={item.id}
      className="
        mx-auto
        w-72
        overflow-hidden
        rounded-lg
        bg-white
        shadow-md
        hover:scale-105
        duration-300
        flex
        flex-col
      "
    >
      <img
        className="h-48 w-full object-cover"
        src={item.image}
        alt={item.name}
      />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="mb-2 text-lg font-medium">
          {item.name}
        </h2>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold">
            ${item.price}
          </p>

          <button
            onClick={() => addToCart(item)}
            className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      )}
    </div>
  );
}
