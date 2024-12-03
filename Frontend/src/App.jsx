import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import AddProduct from "./Pages/AddProduct"
import Login from "./Pages/Login"
import ProductPage from "./Pages/ProductPage"
import Orders from "./Pages/Orders"
import ScrollToTop from "./Components/ScrollToTop"
import ConsumerLayout from "./Layout/ConsumerLayout"
import ConsumerHome from "./Pages/ConsumerHome"
import Cart from "./Pages/Cart"
import LoginConsumer from "./Pages/LoginConsumer"
import { Provider } from "react-redux"
import Store from "./Store"


function App() {

  return (
    <>
      <Router>
        <Provider store={Store}>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/order" element={<Orders />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/consumer" element={<ConsumerLayout />}>
                <Route path="/consumer" element={<ConsumerHome />} />
                <Route path="/consumer/cart" element={<Cart />} />
                <Route path="/consumer/login" element={<LoginConsumer />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </Provider>
      </Router>
    </>
  )
}

export default App
