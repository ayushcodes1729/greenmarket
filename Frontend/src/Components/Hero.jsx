import React from 'react'

function Hero() {
    return (
        <div className='h-[100vh] bg-hero bg-cover bg-center bg-no-repeat -z-10    '>
            <div className='bg-[#ffffffa8] h-full px-4 sm:px-10 flex flex-col sm:justify-center gap-4 sm:gap-10'>
                <h1 className='text-green-500 sm:text-center font-bold text-2xl md:text-5xl'>Welcome to Green Market</h1>
                <p className='text-xl'>
                    <span className='text-green-600 font-semibold text-xl sm:text-3xl'>GreenMarket</span> is a web-based platform designed to connect farmers directly with consumers, eliminating middlemen and ensuring that farmers receive fair prices for their crops. Customers can buy fresh, locally-sourced produce directly from farmers.
                </p>
                <p>
                    <h1 className='text-2xl sm:text-3xl font-bold mb-3'>Major Features: </h1>
                    <ul className='px-5'>
                        <li className='list-disc'>User-friendly dashboard for farmers and customers with tailored interfaces.</li>
                        <li className='list-disc'>Easy product listing and categorization for seamless browsing.</li>
                        <li className='list-disc'>Fair pricing mechanism with market-based price suggestions.</li>
                        {/* <li className='list-disc'>Secure payment system with multiple payment options.</li>
                        <li className='list-disc'>Real-time order tracking and flexible delivery scheduling.</li> */}
                        <li className='list-disc'>Ratings and reviews system to build trust and credibility.</li>
                        <li className='list-disc'>Automated notifications for order updates and inventory management.</li>
                        <li className='list-disc'>Optional sustainability badge system for eco-friendly farmers.</li>
                    </ul>

                </p>
            </div>
        </div>
    )
}

export default Hero
