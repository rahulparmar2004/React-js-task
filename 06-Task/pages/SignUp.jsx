import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const { signup, users } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username required";
    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    else if (users.some((u) => u.email === form.email))
      newErrors.email = "Email already exists";

    if (!form.password) newErrors.password = "Password required";
    else if (form.password.length < 6) newErrors.password = "At least 6 chars";

    if (!form.confirmPassword) newErrors.confirmPassword = "Confirm password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    signup(newUser); // Context function
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join TravelGo and start exploring ✈️
        </p>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className={`w-full mb-2 px-4 py-3 border rounded-lg ${errors.username ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.username && <p className="text-red-500 text-sm mb-3">{errors.username}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full mb-2 px-4 py-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full mb-2 px-4 py-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`w-full mb-2 px-4 py-3 border rounded-lg ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-3">{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </Link>


        </p>
        </div>
        </div>
  );
};

export default Signup;
