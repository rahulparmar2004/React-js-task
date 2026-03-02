import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: { ...form, id: Date.now() }
    });

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-xl p-6 rounded-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e)=>setForm({...form, name:e.target.value})}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={(e)=>setForm({...form, price:e.target.value})}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={(e)=>setForm({...form, description:e.target.value})}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={form.image}
          onChange={(e)=>setForm({...form, image:e.target.value})}
        />

        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">
          Save Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;