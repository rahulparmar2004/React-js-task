import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function EditProduct() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          Product Not Found
        </h2>
      </div>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE", payload: form });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          ✏ Edit Product
        </h2>

        {/* Image Preview */}
        {form.image && (
          <div className="flex justify-center">
            <img
              src={form.image}
              alt="preview"
              className="h-48 object-contain rounded-lg shadow"
            />
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={form.name}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            value={form.price}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            value={form.description}
            rows="4"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            value={form.image}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
          >
            Update Product
          </button>

          <Link
            to="/"
            className="flex-1 text-center bg-gray-300 hover:bg-gray-400 py-3 rounded-lg transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;