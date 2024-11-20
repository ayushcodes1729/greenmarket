import React from 'react';
import LottieAnimation from './LottieAnimation';

function Hero() {
    return (
        <div className='h-[90vh] sm:h-[80vh] bg-cover bg-center bg-no-repeat -z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between'>
            {/* Text Section */}
            <div className='bg-[#ffffffa8] h-full px-4 sm:px-10 sm:mt-[10vh] flex flex-col gap-4 sm:gap-10 w-full sm:w-[60%]'>
                <h1 className='text-green-500 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center sm:text-left'>
                    Welcome to Green Market
                </h1>
                <p className='text-base sm:text-lg md:text-xl text-center sm:text-left'>
                    <span className='text-green-600 font-semibold text-lg sm:text-2xl md:text-3xl'>
                        GreenMarket
                    </span>{' '}
                    is a web-based platform designed to connect farmers directly with consumers, eliminating middlemen and ensuring that farmers receive fair prices for their crops. Customers can buy fresh, locally-sourced produce directly from farmers.
                </p>
            </div>

            {/* Lottie Animation Section */}
            <div className='w-full sm:w-[40%] flex justify-center items-center'>
                <LottieAnimation />
            </div>
        </div>
    );
}

export default Hero;
