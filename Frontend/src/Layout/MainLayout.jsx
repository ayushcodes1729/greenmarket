import React from 'react'
import NavbarFarm from '../Components/NavbarFarm'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footers'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function MainLayout() {
    return (
        <div>
            <NavbarFarm/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    )
}

export default MainLayout