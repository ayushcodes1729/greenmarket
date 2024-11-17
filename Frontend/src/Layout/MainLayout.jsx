import React from 'react'
import NavbarFarm from '../Components/NavbarFarm'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <NavbarFarm/>
            <Outlet/>
        </div>
    )
}

export default MainLayout