import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarFarm from '../Components/NavbarFarm'
import RecommendedProducts from '../Components/RecommendedProducts'
import Hero from '../Components/Hero'
import Sales from '../Components/Sales'

function HomePage() {
    return (
        <div>
            <Hero/>
            <RecommendedProducts/>
            <Sales/>
        </div>
    )
}

export default HomePage
