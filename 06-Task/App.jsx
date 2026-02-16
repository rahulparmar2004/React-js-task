import React from 'react'
import { AuthProvider } from "./pages/AuthContext";
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import About from './pages/About';
import ProtectedRoute from './pages/ProtectedRoute';
import Product from './pages/Product';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter >
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={
              <ProtectedRoute >
                <Product />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App


