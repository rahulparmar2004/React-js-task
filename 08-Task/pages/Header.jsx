import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">
        🛒 Product CRUD App
      </h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/add" className="bg-yellow-500 px-3 py-1 rounded text-black hover:bg-yellow-400 transition">
          Add Product
        </Link>
      </div>
    </div>
  );
}

export default Header;