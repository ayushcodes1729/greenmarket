import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footers.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ConsumerLayout() {
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    )
}

export default ConsumerLayout
