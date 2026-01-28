import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Herosection = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("Login"));
        setUser(savedUser);
    }, []);



    return (
        <div
      className="min-h-screen flex items-center justify-center pt-20 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative p-10 rounded-2xl  w-full max-w-xl text-center">

        {!user ? (
          <>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              Welcome to <span className="text-indigo-600">TravelGo</span> ✈️
            </h1>

            <p className="text-gray-600 mb-8">
              Plan your trips, explore destinations, and travel smarter 🌍
            </p>

            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
              Welcome, 👋 <span className="text-indigo-600">{user.email}</span>
            </h1>

          </>
        )}

      </div>

      
    </div>

    )
};

export default Herosection