import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Error from "./Pages/Error";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <AuthProvider>
    //     <Navbar />

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="*" element={<Error />} />
    //     </Routes>

    //   </AuthProvider>
    // </BrowserRouter>

  );
}

export default App;
