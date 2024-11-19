import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import AddProduct from "./Pages/AddProduct"
import Login from "./Pages/Login"
import ProductPage from "./Pages/ProductPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/order" element={<ProductPage />} />
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
