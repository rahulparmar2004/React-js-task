import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("Login");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Login");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
      text-white px-10 py-4 shadow-lg
      fixed top-0 left-0 w-full z-50
    ">
      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-extrabold tracking-wide pl-2">
          Travel<span className="text-yellow-300">Go</span>
        </h1>

        <div className="hidden md:flex space-x-10 text-lg font-medium pl-15">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/product" className="hover:text-yellow-300 transition">Product</Link>
          <Link to="/help" className="hover:text-yellow-300 transition">Help</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        <div className="flex gap-4">
          {!user ? (
            <>
              <Link to="/login">
                <button className="px-5 py-2 bg-white text-gray-900 rounded-full border border-white transition hover:bg-transparent hover:text-white">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
