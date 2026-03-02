import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🛍️ Our Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h2 className="font-semibold text-lg truncate">
                {p.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2 h-10">
                {p.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-indigo-600">
                  ${p.price}
                </span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-5">
                <Link
                  to={`/view/${p.id}`}
                  className="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-sm transition"
                >
                  View
                </Link>

                <Link
                  to={`/edit/${p.id}`}
                  className="flex-1 text-center bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg text-sm transition"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    dispatch({ type: "DELETE", payload: p.id })
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;