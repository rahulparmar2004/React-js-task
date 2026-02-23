import React, { useState } from "react";

function App() {
  const data = [
    {
      "id": 1,
      "title": "Men Black T-Shirt",
      "category": "Men",
      "type": "T-Shirt",
      "price": 799,
      "image": "https://m.media-amazon.com/images/I/516apkFXxkL.jpg"
    },
    {
      "id": 2,
      "title": "Men Blue Jeans",
      "category": "Men",
      "type": "Pant",
      "price": 1499,
      "image": "https://www.tenuejeans.com/cdn/shop/files/JACKSONRENO_0051.jpg?v=1746526707&width=1024"
    },
    {
      "id": 3,
      "title": "Men White Shoes",
      "category": "Men",
      "type": "Shoes",
      "price": 4567,
      "image": "https://www.campusshoes.com/cdn/shop/files/CAMPCLINT_22G-178_WHT_L.GRY_01.webp?v=1757479648"
    },

    {
      "id": 4,
      "title": "Women Pink T-Shirt",
      "category": "Women",
      "type": "T-Shirt",
      "price": 699,
      "image": "https://www.lazyhippos.in/cdn/shop/products/28.png?v=1653384492"
    },
    {
      "id": 5,
      "title": "Women Black Jeans",
      "category": "Women",
      "type": "Pant",
      "price": 1399,
      "image": "https://i.etsystatic.com/25918555/r/il/bbd1e0/7324384573/il_570xN.7324384573_15b9.jpg"
    },
    {
      "id": 6,
      "title": "Women Dress Party",
      "category": "Women",
      "type": "Dress",
      "price": 1699,
      "image": "https://mahezon.in/cdn/shop/files/IMG-20241126-WA0674_800x1026_crop_center@2x.jpg?v=1732617734"
    }
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (type === "All" || item.type === type)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Men & Women Collection
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>T-Shirt</option>
          <option>Pant</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-3 rounded shadow">
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover rounded"
            />

            <h2 className="font-semibold mt-2">{item.title}</h2>

            <p className="text-sm text-gray-500">
              {item.category} - {item.type}
            </p>

            <p className="text-green-600 font-bold">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

