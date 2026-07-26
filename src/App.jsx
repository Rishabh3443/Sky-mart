import React, { useEffect } from 'react'
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./Pages/Home";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from 'react-router';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { useDispatch } from 'react-redux';
import { login } from "../src/Features/Auth";
import Cart from './Pages/Cart';
import Collection from './Pages/Collection';

const App = () => {

  
   const dispatch = useDispatch();

  useEffect(() => {

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser) {
      dispatch(login(currentUser));
    }

  },[]);


  return (
    <div className='h-screen '>
      < Navbar/>

<Routes>
  
  <Route path="/"  element={<Home/>}/>
  <Route path="shop" element={<Shop/>} />
  <Route path="about"element={<About/>}/>
   <Route path="profile"element={<Profile/>}/>
   <Route path="register"element={<Register/>}/>
   <Route path="login"element={<Login/>}/>
   <Route path="cart"element={<Cart/>}/>
   <Route path="/collection/:category" element={<Collection />} />
</Routes>
      
      

    </div>
  )
}

export default App
