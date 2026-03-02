// import {useEffect, useState, useMemo} from 'react'
// import { getAuth , onAuthStateChanged } from 'firebase/auth'
// import {app} from "./Componet/Firebase"
// import Registration from './Componet/Registration'
// import Login from './Componet/Login'
// import { set } from 'firebase/database'
// import { signOut } from 'firebase/auth/cordova'
// import ReadData from './Componet/Todo_Firebase'
// import FireStore from './Componet/FireStore'
// import Bg_changer from './Component/Bg_changer'
// import Usestate_task from "./Component/Usestate_task";
// import UseEffect_task from './Component/UseEffect_task';
// import Useref_task from './Component/Useref_task';
// import Form_task from './Component/Form_task';
// import { Count } from './Redux/Count';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";

// const auth = getAuth(app)


// const App = () => {
//   const [user , setUser] = useState(null)
//   useEffect (() => {
//   onAuthStateChanged(auth , (user) => {
//     if(user) {
//       setUser(user)
//     }else {
//       setUser(null)
//     }
//   })
// },[])

//   if(user !== null) {
//     return (
//     <div>
//       <h1>Hello {user.email}</h1>
//       <button onClick={() => signOut(auth)}>Logout</button>
//     </div>
//     )
//   }

//   return (
//     <div>
//       {/* <Bg_changer /> */}
//       {/* <Usestate_task /> */}
//       {/* <UseEffect_task /> */}
//       {/* <Useref_task /> */}
//       {/* <Form_task /> */}
//       {/* <Count /> */}
//       {/* <Registration /> */}
//       {/* <ReadData /> */}
//       {/* <Login /> */}
//       <FireStore />
//     </div>
//   )
// }

// export default App

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/view/:id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;