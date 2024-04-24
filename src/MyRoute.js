import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'

// Router is used to wrap all the content,ROutes is used to switch to defined Url,Route is used to link URL.

const MyRoute = () => {
  return (
    <Router>
        <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}/> 
                  <Route path='login' element={<Login/>}/>
                  <Route path='register' element={<Register/>}/>
                  <Route path='product' element={<Product/>}/>
                  <Route path='productdetails/:productId' element={<Productdetails/>}/>
                  <Route path='cart' element={<Cart/>}/>
                </Route>
        </Routes>

    </Router>
  )
}

export default MyRoute