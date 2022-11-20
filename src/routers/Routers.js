import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Productdetails from '../pages/Productdetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='Home' />} />
      <Route path="Home" element={<Home/>}></Route>
      <Route path="Shop" element={<Shop/>}></Route>
      <Route path="Cart" element={<Cart/>}></Route>
      <Route path="Productdetails" element={ <Productdetails/>}></Route>
      <Route path="Checkout" element={<Checkout/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Signup" element={<Signup/>}></Route>
    </Routes>
  )
}

export default Routers