import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewProduct() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          Product Not Found
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-100 object-contain rounded-xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              In Stock
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
              🛒 Add to Cart
            </button>

            <Link
              to={`/edit/${product.id}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg transition"
            >
              ✏ Edit Product
            </Link>
          </div>

          {/* Extra Info Section */}
          <div className="mt-8 border-t pt-4 text-sm text-gray-500">
            <p>✔ Free Delivery</p>
            <p>✔ 7 Days Replacement</p>
            <p>✔ Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;