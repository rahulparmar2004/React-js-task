import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase"

const auth = getAuth(app)

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function Register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration Successful 🎉")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={Register}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Register
        </button>



        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Registration
