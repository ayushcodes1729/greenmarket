import React from 'react'
import NavbarFarm from '../Components/NavbarFarm'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footers'

function MainLayout() {
    return (
        <div>
            <NavbarFarm/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout