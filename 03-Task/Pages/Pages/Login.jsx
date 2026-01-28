import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {

  const navigate = useNavigate();

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });


  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    const findUser = data.find(u => u.email === form.email);

    if (!findUser) {
      newErrors.email = "User not found";
    } else if (findUser.password !== form.password) {
      newErrors.password = "Password does not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const loggedInUser = {
      email: form.email,
      isAuth: true,
    };

    localStorage.setItem("Login", JSON.stringify(loggedInUser));
    navigate("/");

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your TravelGo account
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full mb-3 px-4 py-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-3">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full mb-5 px-4 py-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-3">{errors.password}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [data, setData] = useState(() => {
//     const saved = localStorage.getItem("users");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     }

//     if (!form.password) {
//       newErrors.password = "Password is required";
//     }

//     const findUser = data.find((u) => u.email === form.email);

//     if (!findUser) {
//       newErrors.email = "User not found";
//     } else if (findUser.password !== form.password) {
//       newErrors.password = "Password does not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     const loggedInUser = {
//       email: form.email,
//       isAuth: true,
//     };

//     // 🔥 CONTEXT LOGIN (NO DIRECT localStorage here)
//     login(loggedInUser);

//     navigate("/");

//     setForm({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">

//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to your TravelGo account
//         </p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className={`w-full mb-3 px-4 py-3 border rounded-lg ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mb-3">{errors.email}</p>
//           )}

//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className={`w-full mb-5 px-4 py-3 border rounded-lg ${
//               errors.password ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mb-3">{errors.password}</p>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <Link to="/signup">
//             <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
//               Sign Up
//             </span>
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;

