import React from 'react'
import LottieAnimation from './LottieAnimation'

function Hero() {
    return (
        <div className='h-[60vh] bg-cover bg-center bg-no-repeat -z-10 flex justify-between'>
            <div className='bg-[#ffffffa8] h-full px-4 sm:px-10 sm:mt-[10vh] flex flex-col  gap-4 sm:gap-10 w-[60vw]'>
                <h1 className='text-green-500  font-bold text-2xl md:text-7xl'>Welcome to Green Market</h1>
                <p className='text-xl'>
                    <span className='text-green-600 font-semibold text-xl sm:text-3xl'>GreenMarket</span> is a web-based platform designed to connect farmers directly with consumers, eliminating middlemen and ensuring that farmers receive fair prices for their crops. Customers can buy fresh, locally-sourced produce directly from farmers.
                </p>
            </div>
            <div className='w-[38vw]'>
                <LottieAnimation/>
            </div>
        </div>
    )
}

export default Hero
