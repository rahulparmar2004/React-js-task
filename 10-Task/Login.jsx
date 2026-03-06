import React, { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./Firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user) {
      console.log("User updated:", user.photoURL);
    }
  }, [user]);


  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login Successful 🎉"))
      .catch((err) => alert(err.message))
  }

  function googleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;

        setUser(userData);

        console.log("User object:", userData);
        console.log("UID:", userData.uid);
        console.log("Name:", userData.displayName);
        console.log("Email:", userData.email);
        console.log("Photo:", userData.photoURL);
        console.log("Phone:", userData.phoneNumber);
        console.log("Provider:", userData.providerData);

        alert("Google Login Successful 🚀");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg mb-4"
        >
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={googleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </div>


      {user && (
        <div className="text-center mt-6">

          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto text-2xl font-bold">
            {user.displayName?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-2 font-semibold">{user.displayName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>

        </div>
      )}


    </div>
  )
}

export default Login
